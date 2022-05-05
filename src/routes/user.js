const express = require('express');
const router = express.Router();
const axios= require('axios');
const { API_KEY} = process.env;
const adressSchema = require('../models/adress');


//get info
router.get('/wallet', async (req, res)=>{
    try{
        let info = await axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=${API_KEY}`)
        let response = info.data.result
        res.json(response)
    }
    catch(error){
        console.log(error,'error en el get')
    }

})

router.post('/add',(req, res)=>{
    adressSchema(req.body);
})

module.exports = router