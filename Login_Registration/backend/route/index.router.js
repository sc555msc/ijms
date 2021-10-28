const express = require('express');
const router = express.Router();

const ctrlCompany = require('../controller/company.controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlCompany.register);
router.post('/authenticate', ctrlCompany.authenticate);
router.get('/companyProfile', jwtHelper.verifyJwtToken, ctrlCompany.companyProfile);
/*router.post('/login', ctrlCompany.login);*/

module.exports = router;
