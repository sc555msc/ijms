var mongoose = require('mongoose');

var CurriculumVitaeSchema = new mongoose.Schema({  
  nic: String,
  name: String,
  birthdate: String,
  contact_no: String,
  registered_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('CurriculumVitae', CurriculumVitaeSchema);