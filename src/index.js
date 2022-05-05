const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require('dotenv').config()

const userRoutes = require('./routes/user')

const { MONGODB_PASS, MONGODB_USER} = process.env;

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