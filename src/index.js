/* eslint-disable radix */
const express = require('express');
const env = require('dotenv');
const { healthRouter } = require('./routes/health.route');
const { quotesRouter } = require('./routes/quotes.route');
// const { specifiedQuoteRouter } = require('./routes/specifiedQuote.route');

env.config();

const port = process.env.PORT || 3000;
const app = express();

app.use('/health', healthRouter);
app.use('/get-quotes', quotesRouter);
// app.use('/get-quotes', specifiedQuoteRouter);
// app.get('/health', (req, res) => {
//   res.end('hey');
// });
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
