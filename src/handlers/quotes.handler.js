const { getFirstFiftyQuotes, getSingleQuote } = require('../services/quotes.service');

const quotesHandler = async (req, res) => {
  try {
    const firstFiftyquotes = await getFirstFiftyQuotes();
    res.json({
      message: firstFiftyquotes,
    }).status(200);
  } catch (err) {
    res.json({
      error: err.message,
    }).status(400);
  }
};

const singleQuoteHandler = async (req, res) => {
  try {
    const quote = await getSingleQuote(req);
    res.json({
      message: quote,
    }).status(200);
  } catch (err) {
    res.json({
      error: err.message,
    }).status(400);
  }
};

module.exports = { quotesHandler, singleQuoteHandler };
