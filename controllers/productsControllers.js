const Product = require('../models/productModels')
const mongoose = require('mongoose')

const createProduct = async (req, res) => {
    try{
        const { product, category, subcategory } = req.body
        const productBody = await Product.create({product, category, subcategory})
        res.status(200).json(productBody)
    } catch (err){
        res.status(400).json({error: error.message})
    }
}

const getAllProducts = async (req, res) => {
    try{
        const products = await Product.find({}).sort({createdAt: - 1})
        res.status(200).json(products)
    } catch (err) {
        res.status(400).json({error: "Error for getAll"})
    }
}

const getProduct = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({erro: 'No such product'})
    }

    const product = await Product.findById(id)

    if(!product){
        return res.status(404).json({error: 'No such product'})
    }
    res.status(200).json(product)
}

const deleteProduct = async (req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({erro: 'No such product'})
    }
    const product = await Product.findByIdAndDelete({_id: id})

    if(!product){
        return res.status(404).json({error: 'No such product'})
    }
    res.status(200).json(product)
}

const updateProduct = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({erro: 'No such category'})
    }
    const product = await Product.findByIdAndUpdate({_id: id},{
        ...req.body
    })
    if(!product){
        return res.status(404).json({error: 'No such category'})
    }
    res.status(200).json({_id: id, ...req.body, updatedAt: new Date()})
}

module.exports = {
    createProduct,
    getAllProducts,
    getProduct,
    deleteProduct,
    updateProduct
}