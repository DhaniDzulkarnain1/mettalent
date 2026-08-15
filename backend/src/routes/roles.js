const express = require('express');
const { pool } = require('../db/connection');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const result = await pool.query('SELECT id, name FROM roles ORDER BY name');
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
