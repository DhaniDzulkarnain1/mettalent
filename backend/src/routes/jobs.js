const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const location = req.query.location;
    res.json([
      { id: 1, title: "Network Tech", company: "DataCo", location: location || "batam", roleId: 1 }
    ]);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
