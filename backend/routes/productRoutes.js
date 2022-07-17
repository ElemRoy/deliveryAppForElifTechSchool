const express = require('express');
const router = express.Router();

const { getAllProducts, getProductsById } = require('../controller/productsController');

// get all products
//route /api/products
router.get('/', getAllProducts);

// get all products of specific company
//route /api/products
router.get('/:id', getProductsById);

module.exports = router;