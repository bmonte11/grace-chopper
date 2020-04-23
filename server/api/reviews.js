const router = require('express').Router()
const {Review, User} = require('../db/models')
module.exports = router

// Get all reviews for one product
router.get('/products/:productId', async (req, res, next) => {
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

// Get all reviews for one user
router.get('/users/:userId', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      where: {
        userId: req.params.userId
      }
    })
    res.json(reviews)
  } catch (error) {
    next(error)
  }
})
