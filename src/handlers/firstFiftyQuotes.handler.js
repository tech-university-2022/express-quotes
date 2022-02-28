const { getFirstFifyQuotes } = require('../services/firstFiftyQuotes.service');

const firstFiftyQuotesHandler = async (req, res) => {
  const firstFiftyQuotes = await getFirstFifyQuotes();
  res.json({
    firstFiftyQuotes,
  }).status(200);
};

module.exports = {
  firstFiftyQuotesHandler,
};
