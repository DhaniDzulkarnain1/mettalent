require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorHandler');
const talentsRouter = require('./routes/talents');
const rolesRouter = require('./routes/roles');
const jobsRouter = require('./routes/jobs');
const coursesRouter = require('./routes/courses');
const gapRouter = require('./routes/gap');
const matchRouter = require('./routes/match');

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = process.env.FRONTEND_ORIGIN
  ? process.env.FRONTEND_ORIGIN.split(',')
  : ['http://localhost:5173'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Mettalent API is running',
    version: '1.0.0',
    endpoints: {
      talents: '/api/talents',
      roles: '/api/roles',
      jobs: '/api/jobs',
      courses: '/api/courses',
      gap: '/api/gap',
      match: '/api/match'
    }
  });
});

app.use('/api/talents', talentsRouter);
app.use('/api/roles', rolesRouter);
app.use('/api/jobs', jobsRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/gap', gapRouter);
app.use('/api/match', matchRouter);

app.use(errorHandler);

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export for Vercel serverless
module.exports = app;
