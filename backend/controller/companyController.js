const company = require('../models/company');


const getCompanyDetailesById = async (req, res) => {
    try {
        const company = await company.findById(req.params.id);

        res.json(company);
    } catch (error){
        console.error(error);
        res.status(500).json({message: 'Server error'});
    }
}

const getCompanyDetailesByName = async (req, res) => {
    try {
        const company = await company.find({name: req.params.name});

        res.json(company);
    } catch (error){
        console.error(error);
        res.status(500).json({message: 'Server error'});
    }
}

module.exports = {
    getCompanyDetailesById,
    getCompanyDetailesByName
}