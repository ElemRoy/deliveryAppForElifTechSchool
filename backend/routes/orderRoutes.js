const express = require('express');
const router = express.Router();

const { getOrders, addOrder } = require('../controller/orderController');

// get orders by params
//route /api/orders
router.post('/get', getOrders);

// add order
//route /api/orders
router.post('/add', addOrder);

module.exports = router;