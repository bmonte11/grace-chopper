const router = require('express').Router()
const {Product, Review, User} = require('../db/models')
const {isAdmin} = require('./utils')
module.exports = router

router.get('/', async (req, res, next) => {
  console.log(req.user)
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

router.put('/:productId', isAdmin, async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId)
    product.update(req.body)
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

router.post('/', isAdmin, async (req, res, next) => {
  try {
    const product = await Product.create(req.body)
    res.json(product)
  } catch (error) {
    next(error)
  }
})

router.delete('/:productId', isAdmin, async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId)
    await product.destroy()
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

// Reviews

router.get('/:productId/reviews', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      where: {
        productId: req.params.productId
      },
      include: [{model: User, attributes: ['firstName', 'lastName', 'id']}]
    })
    res.json(reviews)
  } catch (error) {
    next(error)
  }
})
