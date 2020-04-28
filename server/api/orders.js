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

router.put('/:orderId', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId)
    order.update(req.body)
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

router.post('/cart', async (req, res, next) => {
  try {
    const newItem = await Item.findOrCreate({
      where: {
        orderId: req.body.orderId,
        productId: req.body.productId
      },
      defaults: {
        orderId: req.body.orderId,
        productId: req.body.productId,
        quantity: req.body.quantity
      }
    })
    const item = newItem[0].dataValues
    if (!newItem[1]) {
      Item.update(
        {quantity: item.quantity + req.body.quantity},
        {
          where: {
            id: item.id
          }
        }
      )
    }
    res.send(newItem)
  } catch (err) {
    next(err)
  }
})

//   Book.update(
//  {title: req.body.title},
//  {where: req.params.bookId}

router.delete('/cart', async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.body.itemId)
    await item.destroy()
    res.status(204).send(item)
  } catch (err) {
    next(err)
  }
})
