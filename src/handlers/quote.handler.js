const { firstFiftyQuote, specificQuote } = require("../services/quote.service");


const quoteHandler = async (req, res) => {
  try {
    const firstFiftyQuoteArray = await firstFiftyQuote();
    res.json({
      firstFiftyQuoteArray
    }).status(200);
  } catch (error) {
    console.error(error);
  }
}

const specificQuoteHandler = async (req, res) => {
  try {
    const specificQuoteObject = await specificQuote(req, res);
    res.json({
      specificQuoteObject
    }).status(200);
  } catch (error) {
    console.error(error);
  }
}


module.exports = {
  quoteHandler,
  specificQuoteHandler
};
