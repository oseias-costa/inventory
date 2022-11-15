require('dotenv').config()
const express = require("express");
const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose')

const app = express();
const category = require('./routes/category')

app.use(express.json({ extended: false }));

//routes
app.use('/api/category', category);

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

