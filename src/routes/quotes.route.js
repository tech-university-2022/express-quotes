const express = require('express');
const { quotesHandler } = require('../handlers/quotes.handler');
const { quoteAtIndexHandler } = require('../handlers/index.quote.handler');

const router = express.Router();// to create a new router object
router.get('/', quotesHandler);

router.get('/:index', quoteAtIndexHandler);

module.exports = {
  quotesRouter: router,
};
