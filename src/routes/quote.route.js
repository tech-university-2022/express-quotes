const express = require('express');
const { quoteHandler,specificQuoteHandler } = require('../handlers/quote.handler');

const router = express.Router();

router.get('/', quoteHandler);
router.get('/:index' , specificQuoteHandler);

module.exports = {
  quoteRouter: router,
};