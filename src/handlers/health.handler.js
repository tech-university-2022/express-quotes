const axios = require('axios').default;
const { firstFiftyQuote } = require("../services/health.service");
const value = 50;

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


module.exports = {
  healthHandler,
};
