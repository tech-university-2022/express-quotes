const express = require('express');
const { healthHandler , specificQuoteHandler } = require('../handlers/health.handler');

const router = express.Router();

router.get('/', healthHandler);
router.get('/:index' , specificQuoteHandler);

module.exports = {
  healthRouter: router,
};
