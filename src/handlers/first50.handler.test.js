const { first50Handler } = require('./first50.handler');
const quoteService = require('../services/quotes.service');
const utils = require('../utils/first50.utils');
const { testQuotes, resultQuotes } = require('../constants/quotes.constants');

describe('first50Handler function', () => {
    const mockResponse = () => {
        const res = {};
        res.set = jest.fn().mockReturnValue(res);
        res.status = jest.fn().mockReturnValue(res);
        res.send = jest.fn().mockReturnValue(res);
        return res;
    };
    it('should return Quotes as text/html response with status 200', async () => {
        jest.spyOn(quoteService,'getAllQuotes').mockResolvedValue({'data': testQuotes});
        jest.spyOn(utils,'getFirstNQuotes').mockReturnValue(resultQuotes);
        const res = mockResponse();
        await first50Handler(null, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith(`<h2>First 50 Quotes:</h2><hr>` + resultQuotes);
    });
    it('should return no-quotes message if no quotes found', async () => {
        jest.spyOn(quoteService,'getAllQuotes').mockResolvedValue({'data': [{name: 'Poorna'}]});
        jest.spyOn(utils,'getFirstNQuotes').mockReturnValue(null);
        const res = mockResponse();
        await first50Handler(null, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith('No Quotes found! :(\n');
    });
});