const {getFirstNQuotes, getNthQuote} = require('./quotes.utils');
const { testQuotes } = require('../constants/quotes.constants');
describe('GetFirstNQuotes function', () => {
    it('should return a string of the first N Quotes in an array with indexes',() => {
        expect(getFirstNQuotes(testQuotes,2))
        .toBe(`1. Poorna: Hi <br>2. Hoseok: Hope <br>`);
    });
    it('should return all the contents of the quotes array if N is not given', () => {
        expect(getFirstNQuotes(testQuotes)).toBe(`1. Poorna: Hi <br>2. Hoseok: Hope <br>3. Namjoon: Rap <br>`);
    });
    it('should return all the quotes array if N is greater than the total quotes', () => {
        expect(getFirstNQuotes(testQuotes,10)).toBe(`1. Poorna: Hi <br>2. Hoseok: Hope <br>3. Namjoon: Rap <br>`);
    });
    it('should return only the first N quotes that have the author and text keys', () => {
        const testKeyPresence = testQuotes;
        testKeyPresence.push({name:'Jimin',text:'Mochi'});
        expect(getFirstNQuotes(testKeyPresence,4)).toBe(`1. Poorna: Hi <br>2. Hoseok: Hope <br>3. Namjoon: Rap <br>`);
    });
    it('should return invalid message if N is not positive', () => {
        try{
            getFirstNQuotes(testQuotes,-3);
        } catch(err) {
            expect(err.message).toBe('Invalid number of quotes, enter a positive number!');
        }
    });
    it('should return invalid message if N is not a number', () => {
        try{
            getFirstNQuotes(testQuotes,'example');
        } catch(err) {
            expect(err.message).toBe('Invalid number of quotes, enter a positive number!');
        }
    });
    it('should return invalid message if input is not an array',() => {
        try{
            getFirstNQuotes('example',4);
        } catch(err) {
            expect(err.message).toBe('Invalid quote input, enter an array of quotes!');
        }
    });
    it('should return invalid message if input is not an array of quotes',() => {
        try{
            getFirstNQuotes([1,2,3],4);
        } catch(err) {
            expect(err.message).toBe('Invalid quote input, enter an array of quotes!');
        }
    });
    it('should return null if no quotes exist with the author & text keys', () => {
        expect(getFirstNQuotes([{example:'Hi'}],2)).toBe(null);
    });
    it('should return invalid message if no input is given', () => {
        try{
            expect(getFirstNQuotes());
        } catch(err) {
            expect(err.message).toBe('Invalid, enter input!');
        }
    });
});
describe('GetNthQuote function', () => {
    const testQuotes = [{author:'Poorna',text:'Hi'},{author:'Hoseok',text:'Hope'},{author:'Namjoon',text:'Rap'}];
    it('should return the quote at the Nth position',() => {
        expect(getNthQuote(testQuotes,2))
        .toBe(`The quote at position 2:<br> Hoseok: Hope <br>`);
    });
    it('should return invalid message if position is not given', () => {
        try{
            getNthQuote(testQuotes);
        } catch(err) {
            expect(err.message).toBe('Invalid, enter a proper position!');
        }
    });
    it('should return invalid message if position is greater than the total quotes', () => {
        try{
            getNthQuote(testQuotes,10);
        } catch(err) {
            expect(err.message).toBe('There is no quote at index 10!');
        }
    });
    it('should return invalid message i finput quotes not given', () => {
        try{
            getNthQuote();
        } catch(err) {
            expect(err.message).toBe('Invalid, enter input!');
        }
    });
    it('should return invalid message if position is not positive', () => {
        try{
            getNthQuote(testQuotes,-3);
        } catch(err) {
            expect(err.message).toBe('Invalid, enter a proper position!');
        }
    });
    it('should return invalid message if position is not a number', () => {
        try{
            getNthQuote(testQuotes,'example');
        } catch(err) {
            expect(err.message).toBe('Invalid, enter a proper position!');
        }
    });
    it('should return invalid message if input is not an array',() => {
        try{
            getNthQuote('example',4);
        } catch(err) {
            expect(err.message).toBe('Invalid quote input, enter an array of quotes!');
        }
    });
    it('should return invalid message if input is not an array of quotes',() => {
        try{
            getNthQuote([1,2,3],4);
        } catch(err) {
            expect(err.message).toBe('Invalid quote input, enter an array of quotes!');
        }
    });
});