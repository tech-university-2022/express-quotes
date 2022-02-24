const { firstFiftyQuote, getspecificQuote } = require('../services/quotes.services');

const quoteHandler = async (req, res) => {
  try {
    const firstFiftyQuotes = await firstFiftyQuote();
    res.json({
      firstFiftyQuotes,
    }).status(200);
  } catch (error) {
    console.error(error);
  }
};
const specificquoteHandler = async (req, res) => {
  try {
    const quoteIndex = req.params.index;
    const specificQuotes = await getspecificQuote(quoteIndex);
    res.json({ specificQuotes }).status(200);
  } catch (error) {
    console.error(error);
  }
};
module.exports = { quoteHandler, specificquoteHandler };
