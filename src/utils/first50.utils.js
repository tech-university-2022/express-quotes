const getFirstNQuotes = (quotes, num) => {
    if(!quotes) throw Error('Invalid, enter input!');
    if(quotes.constructor !== Array || quotes.every((quote) => quote.constructor !== Object)) throw Error('Invalid quote input, enter an array of quotes!');
    if(!num || num > quotes.length) num = quotes.length;
    else if(num < 0 || typeof num !== 'number') throw Error('Invalid number of quotes, enter a positive number!');
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
    if(!quotes) throw Error('Invalid, enter input!');
    if(quotes.constructor !== Array || quotes.every((quote) => quote.constructor !== Object)) throw Error('Invalid quote input, enter an array of quotes!');
    if(!index || index <= 0 || typeof index !== 'number') throw Error('Invalid, enter a proper position!');
    else if(index-1 > quotes.length) throw Error(`There is no quote at index ${index}!`);
    const nthQuote = `${quotes[index-1].author}: ${quotes[index-1].text}`;
    return `The quote at position ${index}: ${nthQuote} <br>`;
}
module.exports = {
    getFirstNQuotes,
    getNthQuote,
};