const getFirstNQuotes = (quotes, num) => {
    if(!quotes) throw Error('Invalid, enter input!');
    if(quotes.constructor !== Array || quotes.every((quote) => quote.constructor !== Object)) throw Error('Invalid quote input, enter an array of quotes!');
    if(!num || num > quotes.length) num = quotes.length;
    else if(num < 0 || typeof num !== 'number') throw Error('Invalid number of quotes, enter a positive number!');
    let firstN = quotes.slice(0,num).reduce((acc, quote, index) => {
        console.log(quote,quote.constructor,'\n');
        if(quote.author && quote.text){
            return acc + `${index+1}. ${quote.author}: ${quote.text} <br>`;
        }
        return acc;
    },'');
    if(firstN.length === 0) return null;
    return firstN;
};
module.exports = {
    getFirstNQuotes,
};