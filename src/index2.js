const express = require('express');
const env = require('dotenv');
const { quotesRouter } = require('./routes/quotes.route');

env.config();

const port = process.env.PORT || 3001;
const app = express();

app.use('/50quotes', quotesRouter);
app.use('/quoteAtIndex', quotesRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/50quotes or http://localhost:3001/quoteAtIndex/49`);
});
