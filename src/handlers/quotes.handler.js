const { getFirstFiftyQuotes, getNthQuote } = require('../services/quote.service');

const firstFiftyHandler = async (req, res) => {
  const allQuotes = await getFirstFiftyQuotes();
  res.json(allQuotes).status(200);
};
const specificQuoteHandler = async (req, res) => {
  const quoteIndex = req.params.index;
  console.log(quoteIndex);
  const quote = await getNthQuote(quoteIndex);
  res.json(quote).status(200);
};
module.exports = {
  firstFiftyHandler,
  specificQuoteHandler,
};
