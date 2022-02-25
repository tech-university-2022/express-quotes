const axios = require('axios').default;

// eslint-disable-next-line no-unused-vars
const indexQuote = async (req, res) => {
  const quotes = await axios.get('https://type.fit/api/quotes');
  const data = quotes.data[req.params.index];
  return data;
};
module.exports = {
  indexQuote,
};
