const quotes = require('../services/firstFiftyQuotes.service');

const firstFiftyQuotesHandler = async (req, res) => {
  const allQuotes = await quotes.getFirstFiftyQuotes();
  res.json(allQuotes).status(200);
};

module.exports = {
  firstFiftyQuotesHandler,
};
