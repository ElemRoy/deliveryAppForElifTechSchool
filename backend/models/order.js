const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    buyer: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    products: {
        type: Array,
        required: true
    }
});

const order = mongoose.model('order', orderSchema);

module.exports = order;