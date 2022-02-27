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

const fetchFiftyQuote = async () => {
    const completeQuotes = await getQuotes();
    return completeQuotes.data.slice(0,50)
}
const specificQuote = async (index) => {
    try {
        const completeQuoteArray = await getQuotes();
        return completeQuoteArray.data[index];
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