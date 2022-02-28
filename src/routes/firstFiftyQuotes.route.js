const express = require('express');
const { firstFiftyQuotesHandler } = require('../handlers/firstFiftyQuotes.handler');

const firstFiftyQuotesRouter = express.Router();
firstFiftyQuotesRouter.get('/', firstFiftyQuotesHandler);

module.exports = {
  firstFiftyQuotesRouter,
};
