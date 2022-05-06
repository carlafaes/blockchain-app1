const model = require('../models/adress')
const mongoose = require('mongoose')
const axios= require('axios');
const { API_KEY} = process.env;

exports.getInfo= async (req, res)=>{
    try{
        let transactions= await axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${API_KEY}`)
        let response = transactions.data.result
        // console.log(response)
        res.json(response)
    }
    catch(error){
        console.log(error,'error en el get')
    }
    
}

exports.princValue = async (req, res) => {
    try{
        let info = await axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=${API_KEY}`)
        let response = info.data.result
        res.json(response)
        
        
    }
    catch(err){
        console.log(err, 'error def value')
    }
}


exports.blockTimeNumber = async(req, res) =>{
    try{
        let number= await axios.get(`https://api.etherscan.io/api?module=stats&action=chainsize&startdate=2022-04-13&enddate=2022-05-05&clienttype=geth&syncmode=default&offset=10&sort=asc&apikey=${API_KEY}`)
        let response = number.data.result
        //console.log(response)
        res.json(response);
    }
    catch(err){
        console.error(err, 'err in blockTimeNumber')
    }
}

exports.insertData =  async (req, res)=>{
    const data = req.body
    model.create(data, (err, docs) =>{
        if(err){
            res.status(422).send({error:'Error in insertData'})
        }
        else{
            res.send({data:docs})
        }
    })
}

exports.showAdress = async (req,res)=>{
    const add = await model.find()
    res.send(add)
}