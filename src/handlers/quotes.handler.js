const { firstFiftyQuotes, quoteAtIndex } = require('../services/quotes.service');

const quoteHandler = async (req, res) => {
  const firstFifty = await firstFiftyQuotes();
  res.json({
    firstFifty,
  }).status(200);
};

const indexQuoteHandler = async (req, res) => {
  const indexQuote = await quoteAtIndex(req.params.index);
  res.json({
    indexQuote,
  }).status(200);
};

module.exports = {
  quoteHandler,
  indexQuoteHandler,
};
