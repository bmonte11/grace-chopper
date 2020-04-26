const router = require('express').Router()
const {User, Review} = require('../db/models')
const {isAdmin} = require('./utils')
module.exports = router

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'firstName', 'lastName', 'isAdmin']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    res.status(201).json(newUser)
  } catch (err) {
    next(err)
  }
})

// Reviews
router.get('/:userId/reviews', async (req, res, next) => {
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
