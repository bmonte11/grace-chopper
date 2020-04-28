const router = require('express').Router()
module.exports = router

router.put('/cart', (req, res, next) => {
  req.session.cart = {items: []}
  res.sendStatus(201)
})
