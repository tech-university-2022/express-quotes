const { first50Handler, specificQuoteHandler } = require('./quotes.handler');
const quoteService = require('../services/quotes.service');
const utils = require('../utils/quotes.utils');
const { testQuotes, resultQuotes } = require('../constants/quotes.constants');
const quotesErrors = require('../errors/quotes.errors');

const mockResponse = () => {
    const res = {};
    res.set = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
};
describe('First50Handler function', () => {
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
    it('should return invalid message if server error', async () => {
        const res = mockResponse();
        try{
            jest.spyOn(quoteService,'getAllQuotes').mockRejectedValue(new quotesErrors.HttpError('','',500));
            jest.spyOn(utils,'getFirstNQuotes').mockReturnValue(null);
            await first50Handler(null, res);
        } catch(err) {
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.send).toHaveBeenCalledWith(err.message);
        }
    });
});
describe('SpecificQuoteHandler function', () => {
    it('should return the quote at the index given with status 200', async () => {
        jest.spyOn(quoteService,'getAllQuotes').mockResolvedValue({'data': testQuotes});
        jest.spyOn(utils,'getNthQuote').mockReturnValue(`The quote at position 2:<br> Hoseok: Hope <br>`);
        const req = {params: {index : 2}};
        const res = mockResponse();
        await specificQuoteHandler(req,res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith(`The quote at position 2:<br> Hoseok: Hope <br>`);
    });
    it('should return error message if server data not found with status 500', async () => {
        const res = mockResponse();
        const req = {params: {index:2}};
        try{
            jest.spyOn(quoteService,'getAllQuotes').mockRejectedValue(new quotesErrors.HttpError('','',500));
            await specificQuoteHandler(req,res);
        } catch(err) {
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.send).toHaveBeenCalledWith(err.message);
        }
    });
    it('should return error message if position given is invalid with status 400', async () => {
        const req = {param: {index : -1}};
        const res = mockResponse();
        try{
            jest.spyOn(quoteService,'getAllQuotes').mockResolvedValue({'data':testQuotes});
            jest.spyOn(utils,'getNthQuote').mockReturnValue(new quotesErrors.InputError('','',400));
            await specificQuoteHandler(req,res);
        } catch(err) {
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith(err.message);
        }
    });
})