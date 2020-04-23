const router = require('express').Router()
const {Item, Order} = require('../db/models')
module.exports = router

router.get('/cart', async (req, res, next) => {
  // console.log('hello world, this is working')
  // console.log(req.session, 'this is the session')
  // console.log(req.user, 'this is the user')
  try {
    if (req.user) {
      const cart = await Order.findOrCreate({
        where: {
          userId: req.user.id,
          status: 'cart'
        },
        include: [Item],
        defaults: {
          userId: req.user.id,
          status: 'cart'
        }
      })
      // const cart = data
      req.session.cart = cart
      res.send(cart)
    } else {
      res.send(req.session.cart)
    }
  } catch (err) {
    next(err)
  }
})
