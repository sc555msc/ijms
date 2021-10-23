var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Interview = require('../models/Interview.js');
var nodemailer = require('nodemailer');

/* GET ALL Interview */
router.get('/', function(req, res, next) {
	Interview.find(function (err, interviews) {
    if (err) { return next(err);}
    else {
    	res.json(interviews);
    }
  });
});

/* GET SINGLE Interview BY ID */
router.get('/:id', function(req, res, next) {
	Interview.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Interview */
router.post('/', function(req, res, next) {
	Interview.create(req.body, function (err, post) {
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
		  to: req.body.email,
		  subject: req.body.subject,
		  text: req.body.content
		};
		transporter.sendMail(mailOptions, function(error, info){
		  if (error) {
		    console.log(error);
		    post.emailSent = false;
		    return next(err);
		  } else {
		    console.log('Email sent: ' + info.response);
		    post.emailSent = true;
		  }
		});
		// email test
		res.json(post);
    }
  });
});

/* UPDATE Interview */
router.put('/:id', function(req, res, next) {
  Interview.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Interview */
router.delete('/:id', function(req, res, next) {
  Interview.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;