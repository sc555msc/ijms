const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CRDUDB', (err) => {
        if(!err) {
            console.log("MongoDb connected Successfully..");
        } else {
            console.log("Error in DB Connection : " + JSON.stringify(err, undefinded, 2));
        }
});

module.exports = mongoose; 