const express = require('express');
const env = require('dotenv');
const { healthRouter } = require('./routes/health.route');

env.config();

const port = process.env.PORT || 3000;
const app = express();

app.use('/health', healthRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
