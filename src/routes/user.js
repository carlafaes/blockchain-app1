const express = require('express');
const router = express.Router();

const adressSchema = require('../models/adress');
const controller= require('../controllers/adress')



 


//get info
router.get('/block', controller.blockTimeNumber)

router.get('/wallet', controller.getInfo)

router.get('/show', controller.showAdress)

router.post('/add', controller.insertData)

module.exports = router