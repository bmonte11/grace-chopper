const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({})
    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId)
    res.json(product)
  } catch (error) {
    next(error)
  }
})
router.put('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId)
    product.update(req.body)
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const product = await Product.create(req.body)
    res.json(product)
  } catch (error) {
    next(error)
  }
})

router.delete('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId)
    await product.destroy()
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})
