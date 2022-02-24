const { indexQuote } = require('../services/indexQuote.service');

const quoteAtIndexHandler = async (req, res) => {
  /*  const { index } = req.params; */
  // eslint-disable-next-line radix
  // const data = await indexQuote(parseInt(index));
  const data = await indexQuote(req, res);
  res.json({
    message: data,
  }).status(200);
};
module.exports = {
  quoteAtIndexHandler,
};
