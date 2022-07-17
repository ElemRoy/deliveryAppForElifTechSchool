require('dotenv').config();

const connectDB = require('./config/db');
const product = require('./models/product');

const testProducts = [
    {
        name: 'Test',
        company: 'TopCompany',
        price: 50,
        image: 'https://images.unsplash.com/photo-1607166452427-7e4477079cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    }
]

connectDB();

const importData = async () => {
    try {
        await product.deleteMany({});

        await product.insertMany(testProducts);

        console.log('Data import success');

        process.exit();

    } catch (error) {
        console.error('Error with data importing');

        process.exit(1);
    }
}

importData();