const Sequelize = require('sequelize')
const db = require('../db')

const Item = db.define('item', {
  salePrice: {
    type: Sequelize.FLOAT
  },
  quantity: {
    type: Sequelize.INTEGER
  }
})
module.exports = Item

//will want to do validation eventually...
