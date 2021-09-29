const mongoose = require('mongoose');

var Company = mongoose.model('Company', {
    name: {
        type: String
    },
    address: {
        type: String
    },
    email: {
        type: String
    }, 
    phone: {
        type: Number
    },
    vacancy: {
        type: String
    }
});

module.exports = {
    Company
};