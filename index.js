const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
var companyController = require('./Controllers/CompanyController.js');

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Server started at port : 3000')
});

// Can give own name url => localhost:3000/company
app.use('/company', companyController); 

