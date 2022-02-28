const express = require('express');
const env = require('dotenv');
const { firstFiftyQuotesRouter } = require('./routes/firstFiftyQuotes.route');
const { getQuotesByNumberRouter } = require('./routes/getQuotesByNumber.route');

env.config();
const port = process.env.PORT || 3000;
const app = express();
app.use('/firstfiftyquotes', firstFiftyQuotesRouter);
app.use('/quotes', getQuotesByNumberRouter);
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
