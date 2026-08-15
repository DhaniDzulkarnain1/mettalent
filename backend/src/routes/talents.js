const express = require('express');
const router = express.Router();

router.get('/:id', async (req, res, next) => {
  try {
    res.json({
      id: parseInt(req.params.id),
      name: "Sample Talent",
      education: "Bachelor in IT",
      skills: [
        { skillId: 1, name: "Networking", category: "network", proficiency: 2 }
      ]
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
