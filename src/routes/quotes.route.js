const express = require('express');
const { quoteHandler, indexQuoteHandler } = require('../handlers/quotes.handler');

const router = express.Router();

router.get('/', quoteHandler);
router.get('/:index', indexQuoteHandler);

module.exports = {
  quotesRouter: router,
};
