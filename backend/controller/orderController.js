const order = require('../models/order');

const addOrder = async (req, res) => {
    try {
        const query = req.body;

        const _order = await order.insertMany({
            buyer: query.buyer,
            email: query.email,
            phone: query.phone,
            address: query.address,
            products: query.products
        })

        res.status(200);
    } catch (error){
        console.error(error);
        res.status(500).json({message: 'Server error'});
    }
}

const getOrders = async (req, res) => {
    try {
        const orders = await order.find(req.body);
        
        res.json(orders);
    } catch (error){
        console.error(error);
        res.status(500).json({message: 'Server error'});
    }
}

module.exports = {
    addOrder,
    getOrders
}