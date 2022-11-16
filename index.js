require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose')

const app = express();
const category = require('./routes/category')
const subcategory = require('./routes/subcategory')
const products = require('./routes/products')

app.use(express.json({ extended: false }));

//routes
app.use('/api/category', category);
app.use('/api/subcategory', subcategory);
app.use('/api/product', products);

//conect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
        console.log(`Connect on MongoDB and Server is running in port ${process.env.PORT}`)
        });
    })
    .catch((err) => {
        console.log(err)
    })

