const express = require('express');
const env = require('dotenv');
const { quotesRouter } = require('./routes/quotes.route');

const app = express();
const port = process.env.PORT || 3000;

app.use('/quotes', quotesRouter);

app.listen(port, () => {
  console.log(`Server started. Listening on http://localhost:${port}`);
});
