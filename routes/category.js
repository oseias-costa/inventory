const express = require('express')
const { 
    createCategory, 
    getAllCategories, 
    getCategory,
    deleteCategory,
    updateCategory 
    } = require('../controllers/categoryControllers')

const router = express.Router()

router.get('/', getAllCategories)
router.get('/:id', getCategory)
router.post('/', createCategory)
router.delete('/:id', deleteCategory)
router.patch('/:id', updateCategory)



module.exports = router