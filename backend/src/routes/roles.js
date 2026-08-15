const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    res.json([
      { id: 1, name: "Network Technician" },
      { id: 2, name: "Cloud Engineer" }
    ]);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
