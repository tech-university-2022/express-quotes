const req = require('express/lib/request');
const res = require('express/lib/response');
const { specifiedQuoteHandler } = require('../src/handlers/specifiedQuote.handler');
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json =jest.fn().mockReturnValue(res);
    return res;
};

describe('specifiedQuoteHandler function', () => {
    it('should send the fetched data to the client', async () => {
    const req = { params: { index: 3 } };
    const res =mockResponse();
    await specifiedQuoteHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);    
    expect(res.json).toHaveBeenCalledWith( {message : { text: 'Difficulties increase the nearer we get to the goal.', author: 'Johann Wolfgang von Goethe' }});
    })
})