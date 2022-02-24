const quotes = require('../services/quoteAtIndex.service');

const getQuoteAtIndexHandler = async (req, res) => {
  try {
    const quoteIndex = req.params.index;
    const quote = await quotes.getQuoteAtIndex(quoteIndex);
    res.json(quote).status(200);
  } catch (err) {
    throw new Error('Data cannot be retrieved');
  }
};

module.exports = {
  getQuoteAtIndexHandler,
};
