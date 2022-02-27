/* eslint-disable*/ 
const express = require("express");
const axios = require('axios').default;


const allQuotes = async () => {
        
        const response = await axios.get('https://type.fit/api/quotes');
        return response.data;
}

const firstFiftyQuotes = async () => {
    
        const first50 = await allQuotes();
        return first50.slice(0, 50);
    
}

const quoteAtPos = async (index) => {

        const quoteAtIndex = await allQuotes();
        return quoteAtIndex[index];
 
}

module.exports = {
    allQuotes,
    firstFiftyQuotes,
    quoteAtPos
};