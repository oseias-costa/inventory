const User = require('../models/userModels')
const mongoose = require('mongoose')

const createUser = async (req, res) => {
    try{
        const { name, email, password, image, companie } = req.body
        const user = await User.create({name, email, password, image, companie})
        res.status(201).json(user)
    } catch (err){
        res.status(400).json({error: err.message})
    }
}

const getAllUsers = async (req, res) => {
    try{
        const users = await User.find({}).sort({createdAt: - 1})
        res.status(200).json(users)
    } catch (err) {
        res.status(400).json({error: "Error for getAll Users"})
    }
}

const getUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({erro: 'No such user'})
    }

    const user = await User.findById(id)

    if(!user){
        return res.status(404).json({error: 'No such category'})
    }
    res.status(200).json(user)
}

const deleteUser = async (req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({erro: 'No such user'})
    }
    const user = await User.findByIdAndDelete({_id: id})

    if(!user){
        return res.status(404).json({error: 'No such category'})
    }
    res.status(200).json(user)
}

const updateUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({erro: 'No such user'})
    }
    const user = await User.findByIdAndUpdate({_id: id},{
        ...req.body
    })
    if(!user){
        return res.status(404).json({error: 'No such user'})
    }
    res.status(200).json({_id: id, ...req.body, updatedAt: new Date()})
}

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    deleteUser,
    updateUser
}