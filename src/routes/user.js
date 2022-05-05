const express = require('express');
const router = express.Router();
const axios= require('axios');
const { API_KEY} = process.env;
const adressSchema = require('../models/adress');
const controller= require('../controllers/adress')

const show= async()=>{
    const add = await adressSchema.find()
    console.log(add)
}
 show()

 const create = async()=>{
     const adress = new adressSchema(req.body)
     const result = await adress.save()
     console.log(result)
 }


//get info
router.get('/wallet', controller.getInfo)

router.post('/add', controller.insertData)

module.exports = router