const express = require('express');
const {first50Handler} = require('../handlers/first50.handler');

const router = express.Router();

router.get('/', first50Handler);

module.exports = {
    first50Router: router,
}