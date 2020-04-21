const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  category: {
    type: Sequelize.ENUM('Utility', 'Chef', 'Boning', 'Other'),
    allowNull: false
  },
  origin: {
    type: Sequelize.ENUM('Western', 'Japanese', 'Other'),
    allowNull: false
  },
  photo: {
    type: Sequelize.STRING,
    defaultValue: 'https://cdn.cutleryandmore.com/products/large/34250.jpg'
  }
})

module.exports = Product
