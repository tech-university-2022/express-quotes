const express = require('express');
const env = require('dotenv');

env.config();
const { quoterouter } = require('./routes/quote.routes');

const app = express();
const port = process.env.PORT || 3000;
app.use('/quote', quoterouter);
app.listen(port, () => {
  console.log(`Express app  listening on port ${port}`);
});
