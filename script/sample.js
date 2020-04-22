const db = require('../server/db')
const {User, Order, Product, Item, Review} = require('../server/db/models')
const faker = require('faker')

const fakerUsers = []
const fakerOrders = []
const fakerProducts = []
const fakerItems = []
const fakerReviews = []

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const pickRandomCategory = () => {
  const num = getRandomInt(1, 4)
  if (num === 1) {
    return 'Utility'
  } else if (num === 2) {
    return 'Chef'
  } else if (num === 2) {
    return 'Boning'
  } else {
    return 'Other'
  }
}

const pickRandomOrigin = () => {
  const num = getRandomInt(1, 3)
  if (num === 1) {
    return 'Western'
  } else if (num === 2) {
    return 'Japanese'
  } else {
    return 'Other'
  }
}

const makeFakeProducts = num => {
  for (let i = 0; i < num; i++) {
    fakerProducts.push({
      name: faker.commerce.productName() + ' Knife',
      description: faker.company.catchPhrase(),
      quantity: getRandomInt(1, 20),
      price: getRandomInt(30, 2000),
      category: pickRandomCategory(),
      origin: pickRandomOrigin(),
      photo: 'https://cdn.cutleryandmore.com/products/large/34250.jpg'
    })
  }
}

makeFakeProducts(10)
