const express = require('express');
const { firstFiftyQuotesHandler } = require('../handlers/firstFiftyQuotes.handler');
const { getQuoteAtIndexHandler } = require('../handlers/quoteAtIndex.handler');

const router = express.Router();
router.get('/getfirstfifty', firstFiftyQuotesHandler);
router.get('/getQuoteAt/:index', getQuoteAtIndexHandler);

module.exports = {
  quotesRouter: router,
};
