const express = require('express');
const env = require('dotenv');
const { quotesRouter } = require('./routes/quotes.route');

env.config();

const port = 3000;
const app = express();

app.use('/quotes', quotesRouter);
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
