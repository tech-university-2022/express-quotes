const axios = require('axios');

const firstFiftyQuote = async () => {
  try {
    const quotes = await axios.get('https://type.fit/api/quotes');
    // console.log(quotes);
    return quotes.data.slice(0, 50);
  } catch (err) {
    throw new Error('Data could not be retrieved');
  }
};
firstFiftyQuote();
const getspecificQuote = async (index) => {
  const quotes = await axios.get('https://type.fit/api/quotes');
  return quotes.data[index];
};
module.exports = {
  firstFiftyQuote, getspecificQuote,
};
