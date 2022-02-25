const quotesErrors = require("../errors/quotes.errors");

const getFirstNQuotes = (quotes, num) => {
    if(!quotes) throw new quotesErrors.InputError('InputError','Invalid, enter input!',400);
    if(quotes.constructor !== Array || quotes.every((quote) => quote.constructor !== Object)) throw new quotesErrors.InputError('InputError','Invalid quote input, enter an array of quotes!',400);
    if(!num || num > quotes.length) num = quotes.length;
    else if(num < 0 || typeof num !== 'number') throw new quotesErrors.InputError('InputError','Invalid number of quotes, enter a positive number!',400);
    let firstN = quotes.slice(0,num).reduce((acc, quote, index) => {
        if(quote.author && quote.text){
            return acc + `${index+1}. ${quote.author}: ${quote.text} <br>`;
        }
        return acc;
    },'');
    if(firstN.length === 0) return null;
    return firstN;
};
const getNthQuote = (quotes, index) => {
    if(!quotes) throw new quotesErrors.InputError('InputError','Invalid, enter input!',400);
    if(quotes.constructor !== Array || quotes.every((quote) => quote.constructor !== Object)) throw new quotesErrors.InputError('InputError','Invalid quote input, enter an array of quotes!',400);
    if(!index || index <= 0 || typeof index !== 'number') throw new quotesErrors.InputError('InputError','Invalid, enter a proper position!',400);
    else if(index-1 > quotes.length) throw new quotesErrors.InputError('InputError', `There is no quote at index ${index}!`,400);
    const nthQuote = `${quotes[index-1].author}: ${quotes[index-1].text}`;
    return `The quote at position ${index}:<br> ${nthQuote} <br>`;
}
module.exports = {
    getFirstNQuotes,
    getNthQuote,
};