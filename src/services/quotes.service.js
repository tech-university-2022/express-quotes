const axios = require('axios').default;

const getQuotes = async () => {
  const quotes = await axios.get('https://type.fit/api/quotes');
  const data = quotes.data.slice(0, 50);
  return data;
};

module.exports = {
  getQuotes,
};
