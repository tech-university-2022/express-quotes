const { getQuotesByNumber } = require('../services/getQuotesByNumber.service');

const getQuotesByNumberHandler = async (req, res) => {
  const { quoteNumber } = req.params;
  const getQuoteByNumber = await getQuotesByNumber(quoteNumber);
  res.json({
    quoteByNumber: getQuoteByNumber,
  }).status(200);
};

module.exports = {
  getQuotesByNumberHandler,
};
