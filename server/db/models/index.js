const User = require('./user')
const Item = require('./item')
const Order = require('./order')
const Product = require('./product')
const Review = require('./review')

User.hasMany(Order)
Order.belongsTo(User)

User.hasMany(Review)
Review.belongsTo(User)

Product.hasMany(Review)
Review.belongsTo(Product)

Product.hasMany(Item)
Item.belongsTo(Product)

Order.hasMany(Item)
Item.belongsTo(Order)

module.exports = {
  User,
  Item,
  Order,
  Product,
  Review
}
