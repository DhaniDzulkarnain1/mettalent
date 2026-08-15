# Deployment Guide

## Google Cloud Run Deployment

### Prerequisites
- Google Cloud account with billing enabled
- `gcloud` CLI installed and authenticated
- Cloud Run API enabled
- Cloud SQL for PostgreSQL instance (or managed PostgreSQL)

### 1. Build and Push Docker Images

#### ML Service
```bash
cd ml
gcloud builds submit --tag gcr.io/PROJECT_ID/mettalent-ml
```

Dockerfile for ML service:
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
```

#### Backend Service
```bash
cd backend
gcloud builds submit --tag gcr.io/PROJECT_ID/mettalent-backend
```

Dockerfile for backend:
```dockerfile
FROM node:20-slim
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
CMD ["node", "src/index.js"]
```

#### Frontend Service
```bash
cd frontend
gcloud builds submit --tag gcr.io/PROJECT_ID/mettalent-frontend
```

Dockerfile for frontend:
```dockerfile
FROM node:20-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
```

nginx.conf:
```nginx
server {
    listen 8080;
    location / {
        root /usr/share/nginx/html;
        try_files $uri $uri/ /index.html;
    }
}
```

### 2. Deploy to Cloud Run

#### Deploy ML Service
```bash
gcloud run deploy mettalent-ml \
  --image gcr.io/PROJECT_ID/mettalent-ml \
  --platform managed \
  --region asia-southeast1 \
  --allow-unauthenticated \
  --port 8080 \
  --memory 512Mi
```

#### Deploy Backend Service
```bash
gcloud run deploy mettalent-backend \
  --image gcr.io/PROJECT_ID/mettalent-backend \
  --platform managed \
  --region asia-southeast1 \
  --allow-unauthenticated \
  --port 3000 \
  --memory 512Mi \
  --set-env-vars DATABASE_URL=postgresql://USER:PASS@HOST/mettalent,ML_SERVICE_URL=https://mettalent-ml-HASH-as.a.run.app
```

#### Deploy Frontend
```bash
gcloud run deploy mettalent-frontend \
  --image gcr.io/PROJECT_ID/mettalent-frontend \
  --platform managed \
  --region asia-southeast1 \
  --allow-unauthenticated \
  --port 8080 \
  --memory 256Mi \
  --set-env-vars VITE_API_URL=https://mettalent-backend-HASH-as.a.run.app/api
```

### 3. Database Setup

Use Cloud SQL or external managed PostgreSQL:

```bash
# Create database
gcloud sql databases create mettalent --instance=INSTANCE_NAME

# Run seed script (from local, connected via cloud-sql-proxy)
npm run seed
```

### 4. Verify Deployment

```bash
# Get URLs
gcloud run services list

# Test endpoints
curl https://mettalent-backend-HASH-as.a.run.app/api/roles
curl -X POST https://mettalent-backend-HASH-as.a.run.app/api/gap \
  -H "Content-Type: application/json" \
  -d '{"talentId":"t1","roleId":"network-ops"}'
```

### Environment Variables

#### ML Service
- None required (uses local JSON seed files)

#### Backend
- `DATABASE_URL`: PostgreSQL connection string
- `ML_SERVICE_URL`: ML service URL
- `PORT`: 3000 (Cloud Run uses 8080 internally)
- `NODE_ENV`: production

#### Frontend
- `VITE_API_URL`: Backend API URL

### Cost Optimization

- Set min instances to 0 for auto-scale to zero
- Use asia-southeast1 region (Singapore, closest to Batam)
- Enable CPU throttling when idle
- Use shared-core machines (smallest tier)

### Security Checklist

- [ ] No secrets in code or env vars (use Secret Manager)
- [ ] CORS configured for production domains only
- [ ] Database uses SSL/TLS connection
- [ ] Cloud Run services use HTTPS only
- [ ] Service accounts with minimal permissions

### Monitoring

```bash
# View logs
gcloud run services logs read mettalent-backend --limit 50

# Monitor requests
gcloud run services describe mettalent-backend
```
