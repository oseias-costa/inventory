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
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    }

},{timestamps: true})

module.exports = mongoose.model('Subcategory', subcategorySchema)