const express = require('express');
const {fetchQuotesHandler,specificQuoteHandler} =require('../handlers/getQuotes.handler');

const router = express.Router();

router.get('/', fetchQuotesHandler);
router.get('/:index' , specificQuoteHandler);

module.exports = {
    fetchQuotesRouter: router,
};