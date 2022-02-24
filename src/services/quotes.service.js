const axios = require('axios');

const getQuotes = async () => {
  try {
    const quotes = await axios.get('https://type.fit/api/quotes');
    return quotes.data;
  } catch (err) {
    return err.message;
  }
};

const getFirstFiftyQuotes = async () => {
  try {
    const quotes = await getQuotes();
    return quotes.slice(0, 50);
  } catch (err) {
    return err.message;
  }
};

const getSingleQuote = async (req) => {
  try {
    const quotes = await getQuotes();
    if (req.params.quoteIndex > quotes.length || req.params.quoteIndex < 0) {
      return new Error('Invalid index');
    }
    // if (typeof (req.params.quoteIndex) !== 'string') {
    //   return new Error('Invalid input');
    // }
    return quotes[req.params.quoteIndex];
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  getFirstFiftyQuotes,
  getSingleQuote,
};
