var mongoose = require('mongoose');

var CompanySchema = new mongoose.Schema({  
  title: String,
  address: String,
  contact_no: String,
  registered_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Company', CompanySchema);