const express = require('express');
const env = require('dotenv');
const { healthRouter } = require('./routes/health.route');
const { quotesRouter } = require('./routes/quotes.route');

env.config();

const port = process.env.PORT || 3000;
const app = express();

app.use('/', healthRouter);
app.use('/quotes', quotesRouter);
app.use('/:index', quotesRouter);
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
