const axios = require('axios');

const getFirstFiftyQuotes = async () => {
  try {
    const allQuotes = await axios.get('https://type.fit/api/quotes');
    return allQuotes.data.slice(0, 50);
  } catch (err) {
    throw new Error('Data could not be retrieved');
  }
};
getFirstFiftyQuotes();
module.exports = {
  getFirstFiftyQuotes,
};
