const express = require('express');
const router = express.Router();

const ctrlStudent = require('../controller/student.controller');
const jwtHelper = require('../config/jwtHelper'); 

router.post('/register', ctrlStudent.register);
router.post('/authenticate', ctrlStudent.authenticate);
router.get('/studentProfile', jwtHelper.verifyJwtToken, ctrlStudent.studentProfile);
/*router.post('/login', ctrlStudent.login);*/

module.exports = router; 
