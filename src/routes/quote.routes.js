const express = require('express');
const { quoteHandler, specificquoteHandler } = require('../handler/quotes.handler');

const router = express.Router();
router.get('/', quoteHandler);
router.get('/:index', specificquoteHandler);
module.exports = {
  quoterouter: router,
};
