const express = require('express')
const { 
    createProduct,
    getAllProducts,
    getProduct,
    deleteProduct,
    updateProduct
    } = require('../controllers/productsControllers')
const { authMiddleware } = require('../middleware/authModdleware')

const router = express.Router()

router.get('/', authMiddleware, getAllProducts)
router.get('/:id', getProduct)
router.post('/', authMiddleware, createProduct)
router.delete('/:id', deleteProduct)
router.patch('/:id', updateProduct)

module.exports = router