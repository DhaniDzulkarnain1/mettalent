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

app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || 'http://localhost:5173'
}));
app.use(express.json());

app.use('/api/talents', talentsRouter);
app.use('/api/roles', rolesRouter);
app.use('/api/jobs', jobsRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/gap', gapRouter);
app.use('/api/match', matchRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
