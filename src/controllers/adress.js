const model = require('../models/adress')
const mongoose = require('mongoose')

exports.getInfo= async (req, res)=>{
    try{
        let info = await axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=${API_KEY}`)
        let response = info.data.result
        res.json(response)
    }
    catch(error){
        console.log(error,'error en el get')
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
    console.log(add)
}