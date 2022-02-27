/* eslint-disable*/
const { status } = require("express/lib/response")
const { firstFiftyQuotes, quoteAtPos } = require("../services/quotes.services");

const first50Handler = async (req, res) => {
  
      const firstFifty = await firstFiftyQuotes();
      res.json({
        firstFifty
      }).status(200);
 
  }
  
  const quotePosHandler = async (req, res) => {
   
      const quotesAtPosition = await quoteAtPos(req.params.index);
      res.json({
        quotesAtPosition
      }).status(200);
   
  }
  
  
  module.exports = {
    first50Handler,
    quotePosHandler
  };