const express = require("express");
const axios = require('axios').default;
const value = 50;
const quoteURL = 'https://type.fit/api/quotes';

const getQuotes = async () => {
    try {
        return await axios.get(`${quoteURL}`)
        // const response = await axios.get(`${quoteURL}`);
        // const completeQuoteArray = response.data;
        // return completeQuoteArray;
    } catch (error) {
        console.error(error);
    }
}

const firstFiftyQuote = async (req, res) => {
    try {
        const completeQuoteArray = await getQuotes();
        return completeQuoteArray.slice(0, 50);
    } catch (error) {
        console.error(error);
    }
}

const specificQuote = async (req, res) => {
    try {
        const completeQuoteArray = await getQuotes();
        return completeQuoteArray[req.params.index];
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    firstFiftyQuote,
    specificQuote,
    quoteURL,
    getQuotes
};