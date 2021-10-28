require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./route/index.router');

var app = express();

// Middleware
app.use(bodyParse.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);

// Error handle
app.use((err, req, res, next) => {
    if(err.name == 'ValidationError') {
        var valError = [];
        Object.keys(err.errors).foreach(key => valError.push(err.errors[key].message));
        res.status(422).send(valError);
    }
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));

