/* eslint-disable */
const { status } = require("express/lib/response")
const axios=require('axios').default;


const healthHandler= async (req, res) => {
    const quotes=await axios.get('http://type.fit./api/quotes')
    res.json({
        message:quotes.data
    }).status(200);

}

module.exports={
    healthHandler
}