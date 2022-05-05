const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require('dotenv').config()
const cors = require('cors');

const userRoutes = require('./routes/user')

const { MONGODB_PASS, MONGODB_USER, DATABASE} = process.env;

const app = express();
const port = process.env.PORT || 3000;

//for parsing json
app.use(
    bodyParser.json({
        limit:'20mb'
    })
)

//for parsing application/x-www-form-urlencoded
app.use(
    bodyParser.urlencoded({
        limit:'20mb',
        extended: true
    })
)


//middleware
app.use('/api', userRoutes)
app.use(express.json())
app.use(cors())

//routes
app.get('/', (req,res) => {
    res.send('Welcome')
});

//mongodb connection
mongoose
.connect(`${DATABASE}`)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.log(error));

app.listen(port,() => console.log('server listening on port ', port));