var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Candidate = require('../models/Candidate.js');

/* GET ALL CandidateS */
router.get('/', function(req, res, next) {
	Candidate.find(function (err, candidates) {
    if (err) { return next(err);}
    else {
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