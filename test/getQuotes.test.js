const axios = require('axios');
const {baseURL,getQuotes}  = require('../src/services/getQuotes.service');
jest.mock('axios');
describe("fetchQuotes", () => {
    describe("when API call is successful", () => {
      it("should return users list", async () => {
        const quotes = [
            { "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
              "author": "Thomas Edison" 
            },
            { "text": "You can observe a lot just by watching.",
              "author": "Yogi Berra"
            },
          ];
          axios.get.mockResolvedValueOnce(quotes);
          const result = await getQuotes()
          expect(axios.get).toHaveBeenCalledWith(`${baseURL}`);
          expect(result).toEqual(quotes);
      });
    });
});