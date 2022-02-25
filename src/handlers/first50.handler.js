const { getFirstNQuotes, getNthQuote } = require('../utils/first50.utils');
const quoteService = require('../services/quotes.service');
const first50Handler =  async (req,res) => {
    const allQuotes = await quoteService.getAllQuotes();
    res.set('Content-Type', 'text/html');
    const first50Quotes = getFirstNQuotes(allQuotes.data, 50);
    if(!first50Quotes) res.status(200).send('No Quotes found! :(\n');
    else res.status(200).send(`<h2>First 50 Quotes:</h2><hr>` + first50Quotes);
};
const specificQuoteHandler = async (req,res) => {

}
module.exports = {
    first50Handler,
    specificQuoteHandler,
}