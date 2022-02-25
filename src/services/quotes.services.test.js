const axios = require('axios');
const { getAllQuotes } = require('./quotes.service');
const { testQuotes } = require('../constants/quotes.constants');

describe('GetAllQuotes function', () => {
    it('should return all the quotes from the source', async () => {
        jest.spyOn(axios,'get').mockResolvedValue({'data': testQuotes});
        const data = await getAllQuotes();
        expect(data).toEqual({'data': testQuotes});
    });
});