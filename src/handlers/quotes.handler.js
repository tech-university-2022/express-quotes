const utils = require('../utils/quotes.utils');
const quoteService = require('../services/quotes.service');
const quotesErrors = require('../errors/quotes.errors');
const first50Handler =  async (req,res) => {
    res.set('Content-Type', 'text/html');
    try{
        const allQuotes = await quoteService.getAllQuotes();
        const first50Quotes = utils.getFirstNQuotes(allQuotes.data, 50);
        if(!first50Quotes) res.status(200).send('No Quotes found! :(\n');
        else res.status(200).send(`<h2>First 50 Quotes:</h2><hr>` + first50Quotes);
    } catch(err) {
        if(err instanceof quotesErrors.InputError || err instanceof quotesErrors.HttpError) res.status(err.httpCode).send(err.message);
    }
};
const specificQuoteHandler = async (req,res) => {
    res.set('Content-Type', 'text/html');
    try{
        const allQuotes = await quoteService.getAllQuotes();
        const {index} = req.params;
        const nthQuote = utils.getNthQuote(allQuotes.data,parseInt(index));
        res.status(200).send(nthQuote);
    } catch(err) {
        if(err instanceof quotesErrors.InputError || err instanceof quotesErrors.HttpError) res.status(err.httpCode).send(err.message);
    }
}
module.exports = {
    first50Handler,
    specificQuoteHandler,
}