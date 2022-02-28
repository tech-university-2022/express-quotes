const axios = require('axios').default;

const getQuotesByNumber = async (quoteNumber) => {
  const allQuotes = await axios.get('https://type.fit/api/quotes');
  if (allQuotes.status === 200) {
    const getQuoteByNumber = allQuotes.data[quoteNumber];
    return getQuoteByNumber;
  } if (allQuotes.status === 404) {
    throw new Error('File not found');
  } else if (allQuotes.status === 500) {
    throw new Error('Internal Server Error');
  } else {
    throw new Error('Error');
  }
};

module.exports = {
  getQuotesByNumber,
};
