const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/products/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId)
    console.log('product in express route:', product)
    res.json(product)
  } catch (error) {
    next(error)
  }
})
