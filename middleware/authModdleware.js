const User = require('../models/userModels')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const { getUser } = require('../controllers/userControllers')
dotenv.config()

const authMiddleware = (req, res, next) => {
    try{
    const { authorization } = req.headers

    if(!authorization){
        return res.send(401)
    }

    const parts = authorization.split(' ')

    if(parts.length !== 2){
        return res.send(401)
    }

    const [shema, token] = parts
    if(shema !== 'Bearer'){
        return res.send(401)
    }
    
        jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
            if(error){
                return res.status(401).send({message: 'erro'})
            }

            if(!mongoose.Types.ObjectId.isValid(decoded.id)){
                return res.status(404).json({erro: 'No such user'})
            }
        
            const user = await User.findById(decoded.id)
        
            if(!user){
                return res.status(404).json({error: 'No such category'})
            }
    
            req.userId = user
            return next()
        })
        
        
    } catch (err){
        console.log(err)
        return res.status(401).send({message: 'Token invalid'})
    }
}

module.exports = {authMiddleware}
