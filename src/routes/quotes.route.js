const express = require('express');
const { quotesHandler, indexQuoteHandler } = require('../handlers/quotes.handler');

const router = express.Router();

router.get('/', quotesHandler);
router.get('/:index', indexQuoteHandler);

module.exports = {
  quotesRouter: router,
};
