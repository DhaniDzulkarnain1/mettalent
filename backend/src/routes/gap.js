const express = require('express');
const { z } = require('zod');
const { validate } = require('../middleware/validate');
const { computeGap } = require('../services/matching');
const router = express.Router();

const gapSchema = z.object({
  talentId: z.string(),
  roleId: z.string()
});

router.post('/', validate(gapSchema), async (req, res, next) => {
  try {
    const { talentId, roleId } = req.body;
    const result = await computeGap(talentId, roleId);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
