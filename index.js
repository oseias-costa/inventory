require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose')

const app = express();

const category = require('./routes/category')
const subcategory = require('./routes/subcategory')
const products = require('./routes/products')
const inventory = require('./routes/inventory')
const stockMovement = require('./routes/stockMovement')

app.use(express.json({ extended: false }));

app.use('/api/category', category);
app.use('/api/subcategory', subcategory);
app.use('/api/product', products);
app.use('/api/inventory', inventory);
app.use('/api/movement', stockMovement);


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
        console.log(`Connect on MongoDB and Server is running in port ${process.env.PORT}`)
        });
    })
    .catch((err) => {
        console.log(err)
    })

