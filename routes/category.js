const express = require('express')
const { 
    createCategory, 
    getAllCategories, 
    getCategory,
    deleteCategory,
    updateCategory 
    } = require('../controllers/categoryControllers')
const { authMiddleware } = require('../middleware/authModdleware')

const router = express.Router()

router.get('/', authMiddleware, getAllCategories)
router.get('/:id', getCategory)
router.post('/',authMiddleware, createCategory)
router.delete('/:id', deleteCategory)
router.patch('/:id', updateCategory)



module.exports = router