/* eslint-disable */
const express=require('express');
const router=express.Router();
const  { healthHandler }=require('../handlers/health.handler')

// Router matches path , will forward request to handler. 
router.get('', healthHandler);

// router.put('/abc', differentHandler)
// router.get('/b', () => {});

module.exports={
    healthRouter: router
};