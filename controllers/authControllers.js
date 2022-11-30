const bcrypt = require('bcrypt')
const User = require('../models/userModels')
const jwr = require('jsonwebtoken')

const login = async(req, res) => {
    const { email, password } = req.body

    const loginService = (email) => User.findOne({email: email})
    try{
        const user = await loginService(email)
        
        if(!user){
            return res.status(400).send({message: 'User not found'})
        }
        
        const passwordIsValid = bcrypt.compareSync(password, user.password)
        if(!passwordIsValid){
            return res.status(400).send({message: 'Invalid Password'})
        }
        
        const generationToken = (id) => jwr.sign({id: id}, process.env.SECRET_JWT, {expiresIn: 86400})
        const token = generationToken(user.id)
        console.log(user.id)

    res.send({token})

    }catch(err){
        console.log(err)
    }
}

module.exports = { login }