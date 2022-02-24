const axios = require('axios').default;

const specifiedQuote = async (index) => {
  const quotes = await axios.get('https://type.fit/api/quotes');
  const data = quotes.data[index];
  return data;
};

module.exports = {
  specifiedQuote,
};
