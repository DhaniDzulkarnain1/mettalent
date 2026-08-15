const express = require('express');
const { z } = require('zod');
const { validate } = require('../middleware/validate');
const router = express.Router();

const matchSchema = z.object({
  roleId: z.number(),
  location: z.string()
});

router.post('/', validate(matchSchema), async (req, res, next) => {
  try {
    res.json([
      {
        talentId: 1,
        name: "Sample Talent",
        score: 0.78,
        matchedSkills: [{ skillId: 1, name: "Networking" }],
        missingSkills: [{ skillId: 2, name: "Cloud Computing" }]
      }
    ]);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
