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
        include: [
          {
            model: Item,
            include: [
              {
                model: Product
              }
            ]
          }
        ],
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

router.post('/cart', async (req, res, next) => {
  try {
    const newItem = await Item.create({
      orderId: req.session.cart[0].id,
      productId: req.body.productId,
      quantity: req.body.quantity
    })
    res.send(newItem)
  } catch (err) {
    next(err)
  }
})

router.delete('/cart', async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.body.itemId)
    await item.destroy()
    res.status(204).send(item)
  } catch (err) {
    next(err)
  }
})
