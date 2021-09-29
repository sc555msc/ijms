const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Company } = require('../model/company'); 

//url => localhost:3000/company
router.get('/', (req, res) => {
    // Retreive all details from Company Collection(DB)
    Company.find((err, docs) => {
        if(!err) {
            res.send(docs);
        } else {
            console.log(" Error : "+ JSON.stringify(err, undefined, 2));
        }
    }); 
});

//url => localhost:3000/company/id
router.get('/:id', (req, res) => {
   if(!ObjectId.isValid(req.params.id)) 
       return res.status(400).send(`No record with given id : ${req.params.id}`);
   
    Company.findById(req.params.id, (err, docs) => {
        if(!err) {
            res.send(docs);
        } else {
            console.log(" Error : "+ JSON.stringify(err, undefined, 2));
        }
    });
});

// Update data
router.put('/:id', (req, res) => {
    // Check the Id is valid or not
    if(!ObjectId.isValid(req.params.id)) 
       return res.status(400).send(`No record with given id : ${req.params.id}`);

       var com = new Company({
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone,
        vacancy: req.body.vacancy
    });
    // Update(set) with available information
    Company.findByIdAndUpdate(req.params.id, { com }, { new: true}, (err, docs) => {
            if(!err) {
                res.send(docs);
            } else {
                console.log(" Error : "+ JSON.stringify(err, undefined, 2));
            }
    });
});

// Delete Function
router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)) 
       return res.status(400).send(`No record with given id : ${req.params.id}`);

    Company.findByIdAndRemove(req.params.id, (err, docs) => {
        if(!err) {
            res.send(docs);
        } else {
            console.log(" Error : "+ JSON.stringify(err, undefined, 2));
        }
    });
});

// Insert data
router.post('/', (req, res) => {
    var com = new Company({
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone,
        vacancy: req.body.vacancy
    });
    com.save((err, docs) => {
        if(!err) {
            res.send(docs);
        } else {
            console.log(" Error is save: "+ JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;