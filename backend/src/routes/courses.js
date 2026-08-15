const express = require('express');
const { pool } = require('../db/connection');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const skillId = req.query.skillId;

    let query = 'SELECT id, name, provider, duration, teaches_skill_id as "teachesSkillId" FROM courses';
    const params = [];

    if (skillId) {
      query += ' WHERE teaches_skill_id = $1';
      params.push(skillId);
    }

    query += ' ORDER BY id';

    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
