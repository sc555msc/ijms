var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');

var Candidate = require('../models/Candidate.js');

/* GET ALL CandidateS */
router.get('/', function(req, res, next) {
	Candidate.find(function (err, candidates) {
    if (err) { return next(err);}
    else {
    	// email test
    	var transporter = nodemailer.createTransport({
    		  service: 'gmail',
    		  auth: {
    		    user: 'sc555.msc@gmail.com',
    		    pass: 'sc555%%%SC'
    		  }
    		});

    		var mailOptions = {
    		  from: 'sc555.msc@gmail.com',
    		  to: 'piyumik11@gmail.com',
    		  subject: 'Sending Email using Node.js',
    		  text: 'That was easy!'
    		};
    		console.log('inside email');
    		transporter.sendMail(mailOptions, function(error, info){
    		  if (error) {
    		    console.log(error);
    		  } else {
    		    console.log('Email sent: ' + info.response);
    		  }
    		});
    		// email test
    	res.json(candidates);
    }
  });
});

/* GET SINGLE Candidate BY ID */
router.get('/:id', function(req, res, next) {
  Candidate.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Candidate */
router.post('/', function(req, res, next) {
  Candidate.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Candidate */
router.put('/:id', function(req, res, next) {
  Candidate.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Candidate */
router.delete('/:id', function(req, res, next) {
  Candidate.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;