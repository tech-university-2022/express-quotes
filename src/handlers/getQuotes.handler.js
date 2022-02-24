const {fetchFiftyQuote,specificQuote}  = require('../services/getQuotes.service')

const fetchQuotesHandler = async(req,res) =>{
    try {
    const QuoteArray = await fetchFiftyQuote (req, res);
    res.json({
      QuoteArray
    }).status(200);
  } catch (error) {
    console.error(error);
  }
}
const specificQuoteHandler = async(req,res) =>{
  try {
    const specificQuoteObject = await specificQuote(req, res);
    res.json({
      specificQuoteObject
    }).status(200);
  } catch (error) {
    console.error(error);
  }
}
module.exports={
    fetchQuotesHandler,
    specificQuoteHandler
}