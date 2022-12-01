const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema

const categorySchema = new Schema({
    categoryName: {
        type: String,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    }

},{timestamps: true}
)

module.exports = mongoose.model('Category', categorySchema)