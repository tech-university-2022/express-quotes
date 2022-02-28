const axios = require('axios').default;
const { getFirstFifyQuotes } = require('../../src/services/firstFiftyQuotes.service');
const expectedFirstFiftyQuotes = require('../../src/constants/firstFiftyQuotes.json');
const allQuotes = require('../../src/constants/allQuotes.json');

describe('getFirstFifyQuotes function', () => {
  it('should give the first 50 quotes when a proper input is given', async () => {
    jest.spyOn(axios, 'get').mockReturnValue(Promise.resolve({ status: 200, data: allQuotes }));
    const firstFiftyQuotes = await getFirstFifyQuotes();
    expect(firstFiftyQuotes).toStrictEqual(expectedFirstFiftyQuotes);
  });
  it('should give file not found error if the status is 404', async () => {
    jest.spyOn(axios, 'get').mockReturnValue(Promise.resolve({ status: 404 }));
    try {
      await getFirstFifyQuotes();
    } catch (err) {
      expect(err.message).toBe('File not found');
    }
  });
  it('should give internal server error if the status is 500', async () => {
    jest.spyOn(axios, 'get').mockReturnValue(Promise.resolve({ status: 500 }));
    try {
      await getFirstFifyQuotes();
    } catch (err) {
      expect(err.message).toBe('Internal Server Error');
    }
  });
});
