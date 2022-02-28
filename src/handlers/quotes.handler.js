const quotes = require('../services/quote.service');

const firstFiftyHandler = async (req, res) => {
  const allQuotes = await quotes.getFirstFiftyQuotes();
  res.json(allQuotes).status(200);
};

module.exports = {
  firstFiftyHandler,
};
