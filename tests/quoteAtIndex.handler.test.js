const { getQuoteAtIndexHandler } = require('../src/handlers/quoteAtIndex.handler');

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};
describe('firstFiftyQuotesHandler function', () => {
  test('should send quote present at index to client side', async () => {
    const req = { params: { index: 3 } };
    const res = mockResponse();
    await getQuoteAtIndexHandler(req, res);
    expect(res.json).toHaveBeenCalledWith({ text: 'Difficulties increase the nearer we get to the goal.', author: 'Johann Wolfgang von Goethe' });
  });
  test('should give error if data cannot be retrieved', async () => {
    try {
      const req = {};
      const res = mockResponse();
      await getQuoteAtIndexHandler(req, res);
      expect(res.json).toHaveBeenCalledWith({ text: 'Difficulties increase the nearer we get to the goal.', author: 'Johann Wolfgang von Goethe' });
    } catch (err) {
      expect(err.message).toBe('Data cannot be retrieved');
    }
  });
});
