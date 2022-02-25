const express = require('express');
const {first50Handler, specificQuoteHandler} = require('../handlers/quotes.handler');

const first50Router = express.Router();
const specificQuoteRouter = express.Router();

first50Router.get('/', first50Handler);
specificQuoteRouter.get('/:index', specificQuoteHandler);

module.exports = {
    first50Router,
    specificQuoteRouter,
}