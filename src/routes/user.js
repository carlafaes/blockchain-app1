const express = require('express');
const router = express.Router();
const axios= require('axios');
const { API_KEY} = process.env;
const adressSchema = require('../models/adress');
const controller= require('../controllers/adress')



 


//get info
router.get('/wallet', controller.getInfo)

router.get('/show', controller.showAdress)

router.post('/add', controller.insertData)

module.exports = router