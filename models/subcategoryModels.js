const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema

const subcategorySchema = new Schema({
    subcategory: {
        type: String,
        require: true
    },
    category: {
        type: String,
        required: true
    }

},{timestamps: true})

module.exports = mongoose.model('Subcategory', subcategorySchema)