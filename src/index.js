const express = require('express');
const env = require('dotenv');
const {healthRouter} = require('./routes/health.route');
const {first50Router, specificQuoteRouter} = require('./routes/quotes.router');
env.config();

const port = process.env.PORT || 3000;
const app = express();

app.use('/health', healthRouter);
app.use('/first50', first50Router);
app.use('/get-quote', specificQuoteRouter);
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
