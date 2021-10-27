const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
        if(!err) {
            console.log("Db Connceted Succesfully...!");
        } else {
            console.log("Error in connection "+ JSON.stringify(err, undefined, 2));
        }
});

require('./student.model');
