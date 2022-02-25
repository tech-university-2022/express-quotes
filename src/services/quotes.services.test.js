const axios = require('axios');
const { getAllQuotes } = require('./quotes.service');
const { testQuotes } = require('../constants/quotes.constants');
const quotesErrors = require('../errors/quotes.errors');
describe('GetAllQuotes function', () => {
    it('should return all the quotes from the source', async () => {
        jest.spyOn(axios,'get').mockResolvedValue({'data': testQuotes});
        const data = await getAllQuotes();
        expect(data).toEqual({'data': testQuotes});
    });
    it('should return invalid error if server not found/working', async () => {
        jest.spyOn(axios,'get').mockRejectedValue(new quotesErrors.HttpError('HTTPError','Internal Server Error!',500));
        try{
            await getAllQuotes();
        } catch(err) {
            expect(err.message).toBe('Internal Server Error!');
        }
    });
});