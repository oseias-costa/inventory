const express = require('express')
const { 
    createSubcategory,
    getAllSubcategories,
    getSubcategory,
    deleteSubcategory,
    updateSubcategory
    } = require('../controllers/subcategoryControllers')

const router = express.Router()

router.get('/', getAllSubcategories)
router.get('/:id', getSubcategory)
router.post('/', createSubcategory)
router.delete('/:id', deleteSubcategory)
router.patch('/:id', updateSubcategory)

module.exports = router