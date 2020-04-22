const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  console.log('hitting the products route')
  try {
    const products = await Product.findAll({})
    console.log(products)
    res.json(products)
  } catch (err) {
    next(err)
  }
})
