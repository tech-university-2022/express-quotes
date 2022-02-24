const axios = require('axios').default;

const firstFiftyQuotes = async (req, res) => {
  const quotes = await axios.get('https://type.fit/api/quotes');
  return quotes.data.slice(0, 50);
};

const QuoteAtIndex = async (req, res) => {
  const quotes = await axios.get('https://type.fit/api/quotes');
  return quotes.data[req.params.index];
};

module.exports = {
  firstFiftyQuotes,
  QuoteAtIndex,
};
