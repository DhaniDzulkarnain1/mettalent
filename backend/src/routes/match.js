const express = require('express');
const { z } = require('zod');
const { validate } = require('../middleware/validate');
const router = express.Router();

const matchSchema = z.object({
  roleId: z.string(),
  location: z.string()
});

router.post('/', validate(matchSchema), async (req, res, next) => {
  try {
    const mlServiceUrl = process.env.ML_SERVICE_URL || 'http://localhost:8000';

    const response = await fetch(`${mlServiceUrl}/match`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });

    if (!response.ok) {
      const error = await response.json();
      return res.status(response.status).json(error);
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
