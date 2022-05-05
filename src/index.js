const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const mongoose = require("mongoose");
require('dotenv').config()

const { MONGODB_PASS, MONGODB_USER} = process.env;

const app = express();
const port = process.env.PORT || 3000;

//routes
app.get('/', (req,res) => {
    res.send('Welcome')
});

//mongodb connection
mongoose
.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@cluster0.idcfk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.log(error));

app.listen(port,() => console.log('server listening on port ', port));