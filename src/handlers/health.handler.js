const { firstFiftyQuote, specificQuote } = require("../services/health.service");


const healthHandler = async (req, res) => {
  try {
    const firstFiftyQuoteArray = await firstFiftyQuote(req, res);
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
  healthHandler,
  specificQuoteHandler
};
