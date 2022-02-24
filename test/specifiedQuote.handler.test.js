// const req = require('express/lib/request');
// const res = require('express/lib/response');
// const { specifiedQuoteHandler } = require('../src/handlers/specifiedQuote.handler');
// const mockResponse = () => {
//     const res = {};
//     res.status = jest.fn().mockReturnValue(res);
//     res.json =jest.fn().mockReturnValue(res);
//     return res;
// };
// const mockRequest = () => {
//     req.params = jest.fn().mockReturnValue({index: 1, prop:'sa'});
//     return {};
// };

// describe('specifiedQuoteHandler function', () => {
//     it('should send the fetched data to the client', async () => {
//     const req = mockRequest();
//     const res =mockResponse();
//     await specifiedQuoteHandler(req, res);
//     expect(res.status).toHaveBeenCalledWith(200);    
//     expect(req.params).toHaveBeenCalled();
//     })
// })