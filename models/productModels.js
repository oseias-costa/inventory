const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema

const productSchema = new Schema({
    product: {
        type: String,
        require: true
    },
    subcategory: {
        type: String,
        require: true
    },
    category: {
        type: String,
        required: true
    }
},{timestamps: true})

module.exports = mongoose.model('Product', productSchema)