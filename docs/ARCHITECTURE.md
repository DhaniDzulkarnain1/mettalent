# Architecture

The API contract below is frozen at hour one. Do not change request or response shapes without updating this file and telling the team.

## Components

```
React (Vite + Tailwind + Framer Motion)  ->  Cloud Run
        |  JSON over fetch
        v
Express REST API  ->  Cloud Run
        |  proxy /gap, /match        |  parameterized SQL
        v                            v
FastAPI + scikit-learn          PostgreSQL / Cloud SQL
```

Request path: frontend to Express to FastAPI (`/gap`, `/match`) to PostgreSQL and back, returning a score, gaps, and course recommendations.

The frontend keeps sample responses for the demo persona in `frontend/src/mocks/`. If the ML service or network fails during the demo, the UI renders from those mocks.

## Directory layout

```
frontend/
  src/
    components/     reusable UI
    pages/          Landing, Profile, GapResult, Employer
    lib/            api client, helpers
    mocks/          sample responses for the demo fallback
backend/
  src/
    routes/         talents, jobs, courses, match
    db/             connection and queries (parameterized)
    middleware/     validation (zod), error handler, cors
  db/seed/          *.json data curated before the event
ml/
  main.py           FastAPI app
  matching.py       gap and match logic (explainable)
  test_matching.py  pytest
docs/
```

## Database schema

```sql
skills        (id PK, name, category)            -- network | cloud | security | facility | ai
roles         (id PK, name, description)         -- five data center roles
role_skills   (role_id FK, skill_id FK, weight)  -- weight 1..3 (importance)
jobs          (id PK, title, company, location, role_id FK)  -- location: batam | singapore
courses       (id PK, name, provider, duration, teaches_skill_id FK)
talents       (id PK, name, education)
talent_skills (talent_id FK, skill_id FK, proficiency)       -- proficiency 1..3
```

All access goes through prepared statements. No concatenated SQL.

## API contract

Every error response is `{ "error": string }` with the matching status code (400, 404, 500).

### Express

```
GET  /api/talents/:id          -> { id, name, education, skills: [{ skillId, name, category, proficiency }] }
GET  /api/roles                -> [{ id, name }]
GET  /api/jobs?location=batam  -> [{ id, title, company, location, roleId }]
GET  /api/courses?skillId=..   -> [{ id, name, provider, duration, teachesSkillId }]
POST /api/gap                  -> proxies ML /gap
POST /api/match                -> proxies ML /match
```

### FastAPI

```
POST /gap
  req:  { talentId, roleId }
  res:  {
          readiness: 0.52,
          have:  [{ skillId, name, proficiency }],
          gaps:  [{ skillId, name, weight, reason }],
          explanation: "short reason for the score"
        }

POST /match
  req:  { roleId, location }
  res:  [ { talentId, name, score: 0.78, matchedSkills: [...], missingSkills: [...] } ]
        // sorted by score descending
```

## Matching logic

Weighted cosine similarity between the role's requirement vector and the talent's skill vector. No training data, no black box, every score is explainable.

```
# Vector space spans all skills.
# role[i]   = requirement weight for skill i (0 if not required)
# talent[i] = talent proficiency on skill i (0 if absent)

score = cosine_similarity(role, talent)                          # 0..1

# readiness = share of requirement weight the talent covers
readiness = sum(weight_i * covered_i) / sum(weight_i)            # covered_i = 1 if talent has skill i

# gaps = required skills (weight > 0) the talent lacks (proficiency == 0),
#        sorted by weight descending
# explanation = f"covers {n}/{m} required skills; largest gap: {top_gap}"
```

Named constants (keep in `ml/config.py`, no magic numbers):

- `WEIGHT_MIN = 1`, `WEIGHT_MAX = 3`
- `PROFICIENCY_MIN = 1`, `PROFICIENCY_MAX = 3`
- `READINESS_HEALTHY = 0.80`

Learning path: for each gap skill, select courses where `teaches_skill_id == gap.skillId`, order gaps by weight descending, and cap at three to five recommendations. The "readiness after completion" figure recomputes readiness as if each gap skill reached proficiency 2.

## Deployment

- Three services on Cloud Run; the static frontend may use Firebase Hosting if that is faster.
- Deploy for the first time between 19:00 and 23:00, not at the end. Verify the live URL before the feature freeze.
- Keep a local fallback with an ngrok tunnel in case Cloud Run misbehaves during the demo.
- Configuration via environment variables, never hardcoded: `DATABASE_URL`, `ML_SERVICE_URL`, `FRONTEND_ORIGIN`.
