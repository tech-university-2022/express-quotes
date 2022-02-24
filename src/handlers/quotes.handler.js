const { firstFiftyQuotes, QuoteAtIndex } = require('../services/quotes.services');

const quotesHandler = async (req, res) => {
  const fiftyQuotes = await firstFiftyQuotes(req, res);
  res.json({
    message: fiftyQuotes,
  }).status(200);
};

const indexQuoteHandler = async (req, res) => {
  const quote = await QuoteAtIndex(req, res);
  res.json({
    message: quote,
  }).status(200);
};

module.exports = {
  quotesHandler,
  indexQuoteHandler,
};
