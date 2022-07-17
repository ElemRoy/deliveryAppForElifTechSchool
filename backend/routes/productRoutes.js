const express = require('express');
const router = express.Router();

const { getAllProducts, getProductsByCompany } = require('../controller/productsController');

// get all products
//route /api/products
router.get('/', getAllProducts);

// get all products of specific company
//route /api/products
router.get('/:company', getProductsByCompany);

module.exports = router;