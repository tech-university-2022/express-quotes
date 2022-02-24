const axios = require('axios').default;
const { getFirstNQuotes } = require('../services/first50.service');

const handler =  async (req,res) => {
    const first50Quotes = await new Promise((resolve) => {
        resolve(axios.get('https://type.fit/api/quotes'));
    });
    res.set('Content-Type', 'text/html');
    const responseData = getFirstNQuotes(first50Quotes.data, 50);
    if(!responseData) res.status(200).send('No Quotes found! :(');
    else res.status(200).send(`<h2>First 50 Quotes:</h2><hr>` + responseData);
};
module.exports = {
    first50Handler: handler,
}