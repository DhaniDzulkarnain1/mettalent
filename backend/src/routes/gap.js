const express = require('express');
const { z } = require('zod');
const { validate } = require('../middleware/validate');
const router = express.Router();

const gapSchema = z.object({
  talentId: z.number(),
  roleId: z.number()
});

router.post('/', validate(gapSchema), async (req, res, next) => {
  try {
    res.json({
      readiness: 0.52,
      have: [{ skillId: 1, name: "Networking", proficiency: 2 }],
      gaps: [{ skillId: 2, name: "Cloud Computing", weight: 3, reason: "Required for role" }],
      explanation: "Covers 1/2 required skills; largest gap: Cloud Computing"
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
