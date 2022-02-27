/* eslint-disable*/
const express = require('express');
const { first50Handler, quotePosHandler } = require('../handlers/quotes.handler');

const router = express.Router();

router.get('/first50', first50Handler);
router.get('/:index' , quotePosHandler);

module.exports = {
  quoteRouter: router,
};

