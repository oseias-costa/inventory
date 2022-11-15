require('dotenv').config()
const express = require("express");
const app = express();
const category = require('./routes/category')

app.use(express.json({ extended: false }));

//routes
app.use('/api/category', category);


app.listen(process.env.PORT, () => console.log(`Server is running in port ${process.env.PORT}`));
