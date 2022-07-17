const product = require('../models/product');

const getAllProducts = async (req, res) => {
    try {
        const products = await product.find({});

        res.json(product);
    } catch (error){
        console.error(error);
        res.status(500).json({message: 'Server error'});
    }
}


const getProductsByCompany = async (req, res) => {
    try {
        const products = await product.find({company: req.params.company});

        res.json(product);
    } catch (error){
        console.error(error);
        res.status(500).json({message: 'Server error'});
    }
}

module.exports = {
    getAllProducts,
    getProductsByCompany
}