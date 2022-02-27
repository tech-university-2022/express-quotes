const axios = require('axios').default;

const getAllQuotes = async () => {
  const response = await axios.get('https://type.fit/api/quotes');
  return response.data;
};
const firstFiftyQuotes = async () => {
  const first50Quotes = await getAllQuotes();
  return first50Quotes.slice(0, 50);
};
const quoteAtIndex = async (index) => {
  const qoute = await getAllQuotes();
  return qoute[index];
};

module.exports = {
  getAllQuotes,
  firstFiftyQuotes,
  quoteAtIndex,
};
