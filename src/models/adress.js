const mongoose= require('mongoose');
const { Schema }= require('mongoose');

const adressSchema = new mongoose.Schema({
    adress:{
        type:String,
        required: true,
    },
    value:{
        type:String,
        
    },
    transactionIndex:{
        type: String,
    }
},
{
    versionKey:false,
    timestamps:true
});

module.exports = mongoose.model('User', adressSchema)