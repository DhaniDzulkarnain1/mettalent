const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const skillId = req.query.skillId;
    res.json([
      { id: 1, name: "Networking Basics", provider: "Coursera", duration: "4 weeks", teachesSkillId: parseInt(skillId) || 1 }
    ]);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
