var mongoose = require('mongoose');

var VacancySchema = new mongoose.Schema({  
	position: String,
	due_date: String,
	company: String,
	skills: [String],
	experince: String,
	catogery:String,
    posted_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Vacancy', VacancySchema);