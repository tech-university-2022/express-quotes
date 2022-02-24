const express = require("express");
const axios = require('axios').default;
const value = 50;

const getQuotes = async () => {
    try {
        const response = await axios.get('https://type.fit/api/quotes');
        const completeQuoteArray = response.data;
        return completeQuoteArray;
    } catch (error) {
        console.error(error);
    }
}

const firstFiftyQuote = async (req, res) => {
    try {
        const completeQuoteArray = await getQuotes();
        const firstFiftyQuoteArray = completeQuoteArray.reduce((previousValue, curr, currIndex) => {
            if (currIndex < value) previousValue.push(curr)
            return previousValue;
        }, []);
        return firstFiftyQuoteArray;
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
    specificQuote
};