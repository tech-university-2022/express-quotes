const { getQuotes } = require('../services/quotes.service');

const quotesHandler = async (req, res) => {
  const quotes = await getQuotes();

  res.json({
    message: quotes,
  }).status(200);
};
module.exports = {
  quotesHandler,
};
