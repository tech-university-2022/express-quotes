/* eslint-disable radix */
const { specifiedQuote } = require('../services/specifiedQuote.service');

const specifiedQuoteHandler = async (req, res) => {
  const { index } = req.params;
  const data = await specifiedQuote(parseInt(index));
  res.json({
    message: data,
  }).status(200);
};

module.exports = {
  specifiedQuoteHandler,
};
