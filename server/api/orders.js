const router = require('express').Router()
const {Item, Order, Product} = require('../db/models')
module.exports = router

router.get('/cart', async (req, res, next) => {
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
      // req.session.cart = cart
      res.send(cart)
    } else {
      res.send(req.session.cart)
    }
  } catch (err) {
    next(err)
  }
})

//Find the cart which is getting updated
//Create an item in the item table with a matching orderID
//Subtract x amount from the product table

router.put('/cart', async (req, res, next) => {
  try {
    console.log(req.params, 'back-end hide and seek')
    const newItem = await Item.create({
      orderId: req.session.cart.id,
      productId: req.params.productId
    })
    res.send(newItem)
  } catch (err) {
    next(err)
  }
})
