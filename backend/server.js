require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes');
const companyRoutes = require('./routes/companyRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cors = require('cors');

connectDB();

const app = express();


app.use(express.json());
app.use(cors());
app.use('/api/products', productRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/orders/', orderRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`))