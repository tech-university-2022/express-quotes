const axios = require('axios');

const getQuoteAtIndex = async (index) => {
  const allQuotes = await axios.get('https://type.fit/api/quotes');
  return allQuotes.data[index];
};
module.exports = {
  getQuoteAtIndex,
};
