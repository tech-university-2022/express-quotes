const axios = require('axios').default;
const { specifiedQuote } = require('../src/services/specifiedQuote.service');
jest.mock('axios');

describe('specifiedQuote function', () => {
    it('should return data from of specified index' , async () => {
    axios.get.mockResolvedValue({'data': [{msg: 'abc'}, {msg: 'bcd'} ]});
    const data = await specifiedQuote(1);
    expect(data).toEqual({msg: 'bcd'});
    });
    it('should return invalid index if length of data is less than index', async () => {
        axios.get.mockResolvedValue({'data': [{msg: 'abc'}, {msg: 'bcd'} ]});
        const msg = await specifiedQuote(5);
        expect(msg).toEqual("invalid index");
    });
    it('should return invalid input if index is not a number', async () => {
        axios.get.mockResolvedValue({'data': [{msg: 'abc'}, {msg: 'bcd'} ]});
        const msg = await specifiedQuote('a');
        expect(msg).toEqual("invalid input");
    });
    it('should return invalid input if index is not a  positive number', async () => {
        axios.get.mockResolvedValue({'data': [{msg: 'abc'}, {msg: 'bcd'} ]});
        const msg = await specifiedQuote(-5);
        expect(msg).toEqual("invalid input");
    })
})