const express = require('express');
const db = require('./config/mongoose');
const dotenv = require('dotenv').config();
const axios = require('axios');


const app = express();

const port = process.env.PORT
const API_KEY = process.env.API_KEY;


// Middleware to parse JSON requests
app.use(express.json());


//routes

app.use('/',require('./routes/userRoute'))



  

app.listen(port,() =>{
    console.log(`server is running on ${port}`);
})