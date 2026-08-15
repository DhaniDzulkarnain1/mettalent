const express = require('express');
const { pool } = require('../db/connection');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const location = req.query.location;

    let query = 'SELECT id, title, company, location, role_id as "roleId" FROM jobs';
    const params = [];

    if (location) {
      query += ' WHERE location = $1';
      params.push(location);
    }

    query += ' ORDER BY id';

    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
