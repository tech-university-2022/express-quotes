/* eslint-disable */
const express = require('express');

const env = require('dotenv');
const { healthRouter } = require('./routes/health.route');
const { quoteRouter } = require('./routes/quotes.route');



env.config(); 
// const port = process.env.PORT;
const port=process.env.PORT || 3000;
const app = express();

// app.get('/health', (req,res) => {
//     res.json({
//         message: "Server is up!"
//     }).status(200);
// })

app.use('/health', healthRouter);
app.use('/quotes', quoteRouter);


app.listen(port, ()=> {
    console.log(`Server listening at port ${port} ...`)
})