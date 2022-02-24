const express = require("express");
const axios = require('axios');
const baseURL = 'https://type.fit/api/quotes';

const getQuotes = async () => {
    try {
        // const response = await axios.get(`${baseURL}`);
        // const completeQuoteArray = response.data;
        return await axios.get(`${baseURL}`)
    } catch (error) {
        console.error(error);
    }
}

const fetchFiftyQuote = async (req, res) => {
    const completeQuotes = await getQuotes();
    return completeQuotes.data.slice(0,50)
}
const specificQuote = async (req, res) => {
    try {
        const completeQuoteArray = await getQuotes();
        return completeQuoteArray.data[req.params.index];
    } catch (error) {
        console.error(error);
    }
}

module.exports={
    baseURL,
    getQuotes,
    fetchFiftyQuote,
    specificQuote
}