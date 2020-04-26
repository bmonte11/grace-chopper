const router = require('express').Router()
const {Item, Order, Product} = require('../db/models')
const {Op} = require('sequelize')
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

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: {
        userId: 1,
        status: {
          [Op.in]: ['shipping', 'completed']
        }
      }
    })
    console.log(orders)
    res.status(200).json(orders)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const orders = await Order.findByPk({
      where: {
        status: {
          [Op.in]: ['shipping', 'completed']
        }
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
      ]
    })
    console.log(orders)
    res.status(200).json(orders)
  } catch (err) {
    next(err)
  }
})
