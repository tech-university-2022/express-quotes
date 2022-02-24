const res = require('express/lib/response');
const { quotesHandler } = require('../src/handlers/quotes.handler');
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json =jest.fn().mockReturnValue(res);
    return res;
};
const mockRequest = () => {
    return {};
};

describe('quotesHandler function', () => {
    it('should send the fetched data to the client', async () => {
    const req = mockRequest();
    const res =mockResponse();
    await quotesHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);    
    })
})
