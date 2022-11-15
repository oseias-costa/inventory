const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema

const subcategorySchema = new Schema({
    subcategory: {
        type: String,
        require: true
    },
    category: {
        type: mongoose.ObjectId,
        ref: 'Category',
        required: true
    }

},)

module.exports = mongoose.model('Subcategory', subcategorySchema)