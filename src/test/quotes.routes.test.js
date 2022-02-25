const { firstFiftyQuote, getspecificQuote } = require('../services/quotes.services');
const { quoteHandler, specificquoteHandler } = require('../handler/quotes.handler');

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};
const mockRequest = (indexValue) => ({
  params: {
    index: indexValue,
  },

});

describe('quoteHandler function', () => {
  it('should send the fifty quotes to the client ', async () => {
    const req = {};
    const res = mockResponse();
    const spy = jest.spyOn(res, 'json');
    // const spy = jest.spyOn(res, 'json');
    // quoteHandler(req, res);
    await quoteHandler(req, res);
    expect(spy).toHaveBeenCalled();
  });
});
describe('specificquoteHandler function', () => {
  it('should send the particular index  quotes to the client ', async () => {
    const res = mockResponse();
    const req = mockRequest(3);
    const spy = jest.spyOn(res, 'json');
    // const spy = jest.spyOn(res, 'json');
    // quoteHandler(req, res);
    await specificquoteHandler(req, res);
    expect(spy).toHaveBeenCalled();
  });
});
