const Movement = require('../models/stockMovementModels')
const mongoose = require('mongoose')

const createStockMovement = async (req, res) => {
    try{
        const { product, category, subcategory,
                amount, costPrice, salePrice,
                size, color, date, type, description } = req.body

        const movementItemBody = await Movement.create({
            product, category, subcategory,
            amount, costPrice, salePrice,
            size, color, date, type, description
        })

        res.status(200).json(movementItemBody)
    } catch (err){
        res.status(400).json({error: err.message})
    }
}

const getAllStockMovement = async (req, res) => {
    try{
        const movement = await Movement.find({}).sort({createdAt: - 1})
        res.status(200).json(movement)
    } catch (err) {
        res.status(400).json({error: "Error for getAll"})
    }
}

const getStockMovement = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({erro: 'No such Inventory'})
    }

    const movement = await Movement.findById(id)

    if(!movement){
        return res.status(404).json({error: 'No such Inventory'})
    }
    res.status(200).json(movement)
}

const deleteStockMovement = async (req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({erro: 'No such inventory item'})
    }
    const movement = await Movement.findByIdAndDelete({_id: id})

    if(!movement){
        return res.status(404).json({error: 'No such inventory item'})
    }
    res.status(200).json(movement)
}

const updateStockMovement = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({erro: 'No such category'})
    }
    const movement = await Movement.findByIdAndUpdate({_id: id},{
        ...req.body
    })
    if(!movement){
        return res.status(404).json({error: 'No such category'})
    }
    res.status(200).json({_id: id, ...req.body, updatedAt: new Date()})
}

module.exports = {
    createStockMovement,
    getAllStockMovement,
    getStockMovement,
    deleteStockMovement,
    updateStockMovement
}