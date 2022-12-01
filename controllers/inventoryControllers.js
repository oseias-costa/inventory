const Inventory = require('../models/inventoryModels')
const mongoose = require('mongoose')

const createItemInventory = async (req, res) => {
    const userId = req.userId
    try{
        const { product, category, subcategory,
                amount, costPrice, salePrice,
                size, color, total } = req.body

        const inventoryItemBody = await Inventory.create({
            product, category, subcategory,
            amount, costPrice, salePrice,
            size, color, total, user: userId
        })

        res.status(200).json(inventoryItemBody)
    } catch (err){
        res.status(400).json({error: error.message})
    }
}

const getAllIventory = async (req, res) => {
    const userId = req.userId
    try{
        const inventory = await Inventory.find({user: userId}).sort({createdAt: - 1})
        res.status(200).json(inventory)
    } catch (err) {
        res.status(400).json({error: "Error for getAll"})
    }
}

const getInventoryItem = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({erro: 'No such Inventory'})
    }

    const inventory = await Inventory.findById(id)

    if(!inventory){
        return res.status(404).json({error: 'No such Inventory'})
    }
    res.status(200).json(inventory)
}

const deleteInventoryItem = async (req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({erro: 'No such inventory item'})
    }
    const inventory = await Inventory.findByIdAndDelete({_id: id})

    if(!inventory){
        return res.status(404).json({error: 'No such inventory item'})
    }
    res.status(200).json(inventory)
}

const updateInventoryItem = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({erro: 'No such category'})
    }
    const inventory = await Inventory.findByIdAndUpdate({_id: id},{
        ...req.body
    })
    if(!inventory){
        return res.status(404).json({error: 'No such category'})
    }
    res.status(200).json({_id: id, ...req.body, updatedAt: new Date()})
}

module.exports = {
    createItemInventory,
    getAllIventory,
    getInventoryItem,
    deleteInventoryItem,
    updateInventoryItem
}