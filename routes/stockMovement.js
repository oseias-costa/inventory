const express = require('express')
const { 
    createStockMovement,
    getAllStockMovement,
    getStockMovement,
    deleteStockMovement,
    updateStockMovement
    } = require('../controllers/stockMovementControllers')

const router = express.Router()

router.get('/', getAllStockMovement)
router.get('/:id', getStockMovement)
router.post('/', createStockMovement)
router.delete('/:id', deleteStockMovement)
router.patch('/:id', updateStockMovement)



module.exports = router