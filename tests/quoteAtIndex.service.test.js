const axios = require('axios');
const { getQuoteAtIndex } = require('../src/services/quoteAtIndex.service');

describe('test services', () => {
  test('should give first fifty quotes', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({
      status: 200,
      data:
        [
          {
            text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
            author: 'Thomas Edison',
          }, {
            text: 'You can observe a lot just by watching.',
            author: 'Yogi Berra',
          }, {
            text: 'A house divided against itself cannot stand.',
            author: 'Abraham Lincoln',
          }, {
            text: 'Difficulties increase the nearer we get to the goal.',
            author: 'Johann Wolfgang von Goethe',
          }, {
            text: 'Fate is in your hands and no one elses',
            author: 'Byron Pulsifer',
          },
        ],
    });
    const output = await getQuoteAtIndex(1);
    expect(output).toStrictEqual({ text: 'You can observe a lot just by watching.', author: 'Yogi Berra' });
  });
  test('should give error if status is 400', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({
      status: 400,
    });
    try {
      await getQuoteAtIndex(2);
    } catch (err) {
      expect(err.message).toBe('Data could not be retrieved');
    }
  });
});
