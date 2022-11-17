const Subcategory = require('../models/subcategoryModels')
const mongoose = require('mongoose')

const createSubcategory = async (req, res) => {
    try{
        const { subcategory, category } = req.body
        const subCategory = await Subcategory.create({ subcategory, category})
        res.status(200).json(subCategory)
    } catch (err){
        res.status(400).json({error: err.message})
    }
}

const getAllSubcategories = async (req, res) => {
    try{
        const subCategory = await Subcategory.find({}).populate('category').sort({createdAt: - 1})
        res.status(200).json(subCategory)
    } catch (err) {
        res.status(400).json({error: "Error for getAll"})
    }
}

const getSubcategory = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({erro: 'No such subcategory'})
    }
    // const { categoryId } = req.params
    // const subCategory = await Subcategory.findById(id).where('category').equals(categoryId)
    const subCategory = await Subcategory.findById(id)

    if(!subCategory){
        return res.status(404).json({error: 'No such subcategory'})
    }
    res.status(200).json(subCategory)
}

const deleteSubcategory = async (req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({erro: 'No such subcategory'})
    }
    const subCategory = await Subcategory.findByIdAndDelete({_id: id})

    if(!subCategory){
        return res.status(404).json({error: 'No such subcategory'})
    }
    res.status(200).json(subCategory)
}

const updateSubcategory = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({erro: 'No such category'})
    }
    const subCategory = await Category.findByIdAndUpdate({_id: id},{
        ...req.body
    })
    if(!subCategory){
        return res.status(404).json({error: 'No such category'})
    }
    res.status(200).json({_id: id, ...req.body, updatedAt: new Date()})
}

module.exports = {
    createSubcategory,
    getAllSubcategories,
    getSubcategory,
    deleteSubcategory,
    updateSubcategory
}