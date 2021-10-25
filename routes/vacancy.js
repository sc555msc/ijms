var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Vacancy = require('../models/Vacancy.js');

/* GET ALL Vacancy */
router.get('/', function(req, res, next) {
	Vacancy.find(function (err, vacancies) {
    if (err) { return next(err);}
    else {
    	res.json(vacancies);
    }
  });
});

/* GET SINGLE Vacancy BY ID */
router.get('/:id', function(req, res, next) {
	Vacancy.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Vacancy */
router.post('/', function(req, res, next) {
	Vacancy.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Vacancy */
router.put('/:id', function(req, res, next) {
  Vacancy.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Vacancy */
router.delete('/:id', function(req, res, next) {
  Vacancy.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;