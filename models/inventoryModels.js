const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema

const inventorySchema = new Schema({
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
    },
    amount: {
        type: Number,
        required: true
    },
    costPrice: {
        type: Number,
        required: true
    },
    salePrice: {
        type: Number,
        required: true
    },
    size: {
        type: Number,
    },
    color: {
        type: String,
    },
    total: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    }
},{timestamps: true})

module.exports = mongoose.model('Inventory', inventorySchema)