const Category = require('../models/categoryModels')
const mongoose = require('mongoose')

const createCategory = async (req, res) => {
    try{
        const { categoryName } = req.body
        const category = await Category.create({categoryName})
        res.status(200).json(category)
    } catch (err){
        res.status(400).json({error: err.message})
    }
}

const getAllCategories = async (req, res) => {
    try{
        const categories = await Category.find({}).sort({createdAt: - 1})
        res.status(200).json(categories)
    } catch (err) {
        res.status(400).json({error: "Error for getAll"})
    }
}

const getCategory = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({erro: 'No such category'})
    }

    const category = await Category.findById(id)

    if(!category){
        return res.status(404).json({error: 'No such category'})
    }
    res.status(200).json(category)
}

const deleteCategory = async (req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({erro: 'No such category'})
    }
    const category = await Category.findByIdAndDelete({_id: id})

    if(!category){
        return res.status(404).json({error: 'No such category'})
    }
    res.status(200).json(category)
}

const updateCategory = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({erro: 'No such category'})
    }
    const category = await Category.findByIdAndUpdate({_id: id},{
        ...req.body
    })
    if(!category){
        return res.status(404).json({error: 'No such category'})
    }
    res.status(200).json({_id: id, ...req.body, updatedAt: new Date()})
}

module.exports = {
    createCategory,
    getAllCategories,
    getCategory,
    deleteCategory,
    updateCategory
}