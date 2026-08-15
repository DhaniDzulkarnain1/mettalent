const express = require('express');
const { pool } = require('../db/connection');
const router = express.Router();

router.get('/:id', async (req, res, next) => {
  try {
    const talentId = req.params.id;

    const talentResult = await pool.query(
      'SELECT id, name, education FROM talents WHERE id = $1',
      [talentId]
    );

    if (talentResult.rows.length === 0) {
      return res.status(404).json({ error: 'Talent not found' });
    }

    const talent = talentResult.rows[0];

    const skillsResult = await pool.query(
      `SELECT s.id as "skillId", s.name, s.category, ts.proficiency
       FROM talent_skills ts
       JOIN skills s ON ts.skill_id = s.id
       WHERE ts.talent_id = $1`,
      [talentId]
    );

    res.json({
      id: talent.id,
      name: talent.name,
      education: talent.education,
      skills: skillsResult.rows
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
