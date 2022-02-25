const axios = require('axios').default;
const getAllQuotes = async() => new Promise((resolve) => {
    resolve(axios.get('https://type.fit/api/quotes'));
});
module.exports = {
    getAllQuotes,
};