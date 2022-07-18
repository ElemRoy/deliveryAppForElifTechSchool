const express = require('express');
const router = express.Router();

const { getCompanyDetailesByName, getCompanyDetailesById } = require('../controller/companyController');

// get detailes by name
//route /api/companies
router.get('/', getCompanyDetailesByName);

// get detailes by id
//route /api/companies
router.get('/:id', getCompanyDetailesById);

module.exports = router;