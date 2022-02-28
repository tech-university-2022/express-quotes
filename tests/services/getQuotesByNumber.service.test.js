const axios = require('axios').default;
const { getQuotesByNumber } = require('../../src/services/getQuotesByNumber.service');
const allQuotes = require('../../src/constants/allQuotes.json');

describe('getQuotesByNumber function', () => {
  it('should give the quote of given number when a proper quote number is given', async () => {
    jest.spyOn(axios, 'get').mockReturnValue(Promise.resolve({ status: 200, data: allQuotes }));
    const getQuoteByNumber = await getQuotesByNumber(0);
    expect(getQuoteByNumber).toStrictEqual({
      author: 'Thomas Edison',
      text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    });
  });
  it('should give file not found error if the status is 404', async () => {
    jest.spyOn(axios, 'get').mockReturnValue(Promise.resolve({ status: 404 }));
    try {
      await getQuotesByNumber(2);
    } catch (err) {
      expect(err.message).toBe('File not found');
    }
  });
  it('should give internal server error if the status is 500', async () => {
    jest.spyOn(axios, 'get').mockReturnValue(Promise.resolve({ status: 500 }));
    try {
      await getQuotesByNumber(3);
    } catch (err) {
      expect(err.message).toBe('Internal Server Error');
    }
  });
});
