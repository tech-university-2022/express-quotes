const express = require('express');
const { firstFiftyHandler, specificQuoteHandler } = require('../handlers/quotes.handler');

const first50Router = express.Router();
first50Router.get('/', firstFiftyHandler);
const specificQuoteRouter = express.Router();
specificQuoteRouter.get('/:index', specificQuoteHandler);
module.exports = {
  first50Router,
  specificQuoteRouter,
};
