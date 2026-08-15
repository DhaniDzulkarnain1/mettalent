const express = require('express');
const { z } = require('zod');
const { validate } = require('../middleware/validate');
const { computeMatch } = require('../services/matching');
const router = express.Router();

const matchSchema = z.object({
  roleId: z.string(),
  location: z.string()
});

router.post('/', validate(matchSchema), async (req, res, next) => {
  try {
    const { roleId, location } = req.body;
    const result = await computeMatch(roleId, location);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
