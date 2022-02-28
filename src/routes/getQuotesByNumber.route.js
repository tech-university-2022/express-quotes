const express = require('express');
const { getQuotesByNumberHandler } = require('../handlers/getQuotesByNumber.handler');

const getQuotesByNumberRouter = express.Router();
getQuotesByNumberRouter.get('/:quoteNumber', getQuotesByNumberHandler);

module.exports = {
  getQuotesByNumberRouter,
};
