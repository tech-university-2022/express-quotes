const express = require("express");
const axios = require('axios').default;
const value = 50;

const firstFiftyQuote = async (req, res) => {
    try {
        const response = await axios.get('https://type.fit/api/quotes');
        const completeQuoteArray = response.data;
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
        const response = await axios.get('https://type.fit/api/quotes');
        const completeQuoteArray = response.data;
        //console.log(req.params.index);
        return completeQuoteArray[req.params.index];
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    firstFiftyQuote,
    specificQuote
};