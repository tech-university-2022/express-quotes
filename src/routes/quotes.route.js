const express = require('express');
const { quotesHandler, singleQuoteHandler } = require('../handlers/quotes.handler');

const router = express.Router();

router.get('/', quotesHandler);
router.get('/:quoteIndex', singleQuoteHandler);

module.exports = {
  quotesRouter: router,
};
