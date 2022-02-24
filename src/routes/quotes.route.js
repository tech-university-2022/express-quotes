const express = require('express');
const { quotesHandler } = require('../handlers/quotes.handler');
const { specifiedQuoteHandler } = require('../handlers/specifiedQuote.handler');

const router = express.Router();

router.get('/', quotesHandler);
router.get('/:index', specifiedQuoteHandler);

module.exports = {
  quotesRouter: router,
};
