const express = require('express');
const env = require('dotenv');
const { healthRouter } = require('./routes/health.route');
const { quotesRouter } = require('./routes/quotes.route');

env.config();

const port = process.env.PORT || 3000;
const app = express();

app.use('/health', healthRouter);
app.use('/quotes', quotesRouter);

/* app.get('/get-quotes', (req, res)=>{
  res.end("message:this is a quotes response");
})
 */
// http verb - GET, POST, PUT, DEL, resource - quotes

/* app.get('/quotes', (req, res) => {
  res.send('abc');
}); */

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
// GET quotes
