const express = require('express')

const router = express.Router()

router.get('/', (req,res) => {
    res.json({msg: 'Get all works'})
})

router.get('/:id', (req,res) => {
    res.json({msg: 'Get a single category'})
})

router.post('/', (req, res) => {
    res.json({msg: 'Post a category'})
})

router.delete('/:id', (req,res) => {
    res.json({msg: 'Delete a category'})
})

router.patch('/:id', (req, res) => {
    res.json({msg: 'Update a category'})
})



module.exports = router