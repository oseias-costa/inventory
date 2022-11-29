const { default: mongoose } = require("mongoose");
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    companie: {
        type: String
    },
    password: {
        type: String,
        require: true
    },
    image: {
        type: String
    }

},{timestamps: true}
)

userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

module.exports = mongoose.model('User', userSchema)