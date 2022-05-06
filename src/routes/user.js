const express = require('express');
const router = express.Router();


const controller= require('../controllers/adress')



 


//get info
router.get('/block', controller.blockTimeNumber);

router.get('/transaction', controller.getInfo);

router.get('/wall', controller.princValue);

router.get('/show', controller.showAdress);

router.post('/add', controller.insertData);

module.exports = router