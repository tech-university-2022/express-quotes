const axios = require('axios').default;
const {HttpError} = require('../errors/quotes.errors');
const getAllQuotes = async() => new Promise((resolve, reject) => {
    try{
        resolve(axios.get('https://tpe.fit/api/quotes'));
    } catch(err) {
        reject(new HttpError('HTTPError', 'Internal Server Error!', 500));
    }
});
module.exports = {
    getAllQuotes,
};