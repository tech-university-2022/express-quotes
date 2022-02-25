const axios = require('axios').default;
const { getQuotes } = require('../src/services/quotes.service');
jest.mock('axios');

describe('getQuotes function', () => {
    it('should return data from url upto length 50' , async () => {
    axios.get.mockResolvedValue({'data': [{msg: 'abc'}, {msg: 'bcd'} ]});
    const data = await getQuotes();
    expect(data).toEqual([{msg: 'abc'}, {msg: 'bcd'} ]);
    });
})