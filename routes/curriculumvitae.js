var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var CurriculumVitae = require('../models/CurriculumVitae.js');

/* GET ALL CurriculumVitaeS */
router.get('/', function(req, res, next) {
	CurriculumVitae.find(function (err, curriculumvitaes) {
    if (err) { return next(err);}
    else {
    	res.json(curriculumvitaes);
    }
  });
});

/* GET SINGLE CurriculumVitae BY ID */
router.get('/:id', function(req, res, next) {
	CurriculumVitae.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE CurriculumVitae */
router.post('/', function(req, res, next) {
	CurriculumVitae.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE CurriculumVitae */
router.put('/:id', function(req, res, next) {
  CurriculumVitae.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE CurriculumVitae */
router.delete('/:id', function(req, res, next) {
  CurriculumVitae.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;