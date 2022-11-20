const express = require('express')
const { 
    createItemInventory,
    getAllIventory,
    getInventoryItem,
    deleteInventoryItem,
    updateInventoryItem
    } = require('../controllers/inventoryControllers')

const router = express.Router()

router.get('/', getAllIventory)
router.get('/:id', getInventoryItem)
router.post('/', createItemInventory)
router.delete('/:id', deleteInventoryItem)
router.patch('/:id', updateInventoryItem)



module.exports = router