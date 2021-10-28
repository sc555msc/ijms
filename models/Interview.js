var mongoose = require('mongoose');

var InterviewSchema = new mongoose.Schema({  
	cv: String,
	vacancy: String,
	s_date: String,
	time: String,
	subject: String,
	content: String,
	emailSent: String,
    posted_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Interview', InterviewSchema);