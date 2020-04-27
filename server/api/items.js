const router = require('express').Router()
const {Item} = require('../db/models')
module.exports = router

router.put('/:itemId', async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.itemId)
    await item.update(req.body)
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})
