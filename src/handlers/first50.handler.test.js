// const { first50Handler } = require('./first50.handler');
// const axios = require('axios');
// const first50Service = require('../services/first50.service');

// describe('first50Handler function', () => {
//     const mockRequest = (sessionData) => {
//         return {
//           session: { data: sessionData },
//         };
//       };
//       const mockResponse = () => {
//         const res = {};
//         res.set = jest.fn().mockReturnValue(res);
//         res.status = jest.fn().mockReturnValue(res);
//         res.send = jest.fn().mockReturnValue(res);
//         return res;
//       };
//     const testQuotes = [{author:'Poorna',text:'Hi'},{author:'Hoseok',text:'Hope'},{author:'Namjoon',text:'Rap'}];
//     it.only('should return Quotes as text/html response with status 200', async () => {
//         jest.spyOn(axios,'get').mockResolvedValue(testQuotes);
//         // jest.spyOn(first50Service,'getFirstNQuotes').mockImplementation((array=testQuotes,num = 3) => {}).mockReturnValue(`1. Poorna: Hi <br>2. Hoseok: Hope <br>3. Namjoon: Rap <br>`);
//         const req = mockRequest();
//         const res = mockResponse();
//         await first50Handler(req, res);
//         expect(res.status).toHaveBeenCalledWith(200);
//         expect(res.send).toHaveBeenCalledWith(`<h2>First 50 Quotes:</h2><hr>` + `1. Poorna: Hi <br>2. Hoseok: Hope <br>3. Namjoon: Rap <br>`);
//     });
//     it('should return no-quotes message if no quotes found', async () => {
//         const req = mockRequest({ username: 'hugo' });
//         const res = mockResponse();
//         await first50Handler(req, res);
//         expect(res.status).toHaveBeenCalledWith(200);
//         expect(res.json).toHaveBeenCalledWith({ username: 'hugo' });
//     });
// });