const product = require('../models/product');

const getAllProducts = async (req, res) => {
    try {
        const products = await product.find({});

        res.json(products);
    } catch (error){
        console.error(error);
        res.status(500).json({message: 'Server error'});
    }
}


const getProductsById = async (req, res) => {
    try {
        const products = await product.findById(req.params.id);

        res.json(products);
    } catch (error){
        console.error(error);
        res.status(500).json({message: 'Server error'});
    }
}

module.exports = {
    getAllProducts,
    getProductsById
}