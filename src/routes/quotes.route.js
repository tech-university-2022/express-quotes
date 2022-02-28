const express = require('express');
const { firstFiftyHandler } = require('../handlers/quotes.handler');

const router = express.Router();
router.get('/', firstFiftyHandler);

module.exports = {
  first50Router: router,
};
