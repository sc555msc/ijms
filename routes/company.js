var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Company = require('../models/Company.js');

/* GET ALL CompanyS */
router.get('/', function(req, res, next) {
	Company.find(function (err, companies) {
    if (err) { return next(err);}
    else {
    	res.json(companies);
    }
  });
});

/* GET SINGLE Company BY ID */
router.get('/:id', function(req, res, next) {
	Company.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Company */
router.post('/', function(req, res, next) {
	Company.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Company */
router.put('/:id', function(req, res, next) {
  Company.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Company */
router.delete('/:id', function(req, res, next) {
  Company.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;