const express = require('express'); 
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const connectDB = require('./config/db');

//Connect To MongoDB
connectDB();


//Routes to use

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
});