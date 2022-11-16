const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema

const productSchema = new Schema({
    product: {
        type: String,
        require: true
    },
    subcategory: {
        type: String,
        ref: 'Subcategory',
        require: true
    },
    category: {
        type: mongoose.ObjectId,
        ref: 'Category',
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema)