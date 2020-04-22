const db = require('../server/db')
const {User, Order, Product, Item, Review} = require('../server/db/models')
const faker = require('faker')

const fakeUsers = []
const fakeOrders = []
const fakeProducts = []
const fakeItems = []
const fakeReviews = []

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomPrice = (min, max) => {
  min = Math.ceil(min * 100)
  max = Math.floor(max * 100)
  return Math.floor(Math.random() * (max - min + 1)) / 100
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

const pickRandomStatus = () => {
  const num = getRandomInt(1, 3)
  if (num === 1) {
    return 'in cart'
  } else if (num === 2) {
    return 'shipping'
  } else {
    return 'completed'
  }
}

const makeFakeOrders = num => {
  for (let i = 0; i < num; i++) {
    fakeOrders.push({
      status: pickRandomStatus()
    })
  }
}

const makeFakeProducts = num => {
  for (let i = 0; i < num; i++) {
    fakeProducts.push({
      name: faker.commerce.productName() + ' Knife',
      description: faker.company.catchPhrase(),
      quantity: getRandomInt(1, 20),
      price: getRandomInt(30, 1000),
      category: pickRandomCategory(),
      origin: pickRandomOrigin(),
      photo: 'https://cdn.cutleryandmore.com/products/large/34250.jpg'
    })
  }
}

const makeFakeItems = num => {
  for (let i = 0; i < num; i++) {
    fakeItems.push({
      salePrice: getRandomInt(30, 1000),
      quantity: getRandomInt(1, 20)
    })
  }
}

const makeFakeReviews = num => {
  for (let i = 0; i < num; i++) {
    fakeReviews.push({
      content: faker.lorem.paragraph(),
      rating: getRandomInt(0, 5)
    })
  }
}

const makeFakeUsers = num => {
  for (let i = 0; i < num; i++) {
    fakeUsers.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email()
    })
  }
}

makeFakeOrders(10)
makeFakeProducts(10)
makeFakeItems(10)
makeFakeReviews(10)
makeFakeUsers(10)

// console.log(fakeOrders);
// console.log(fakeProducts);
// console.log(fakeItems);
// console.log(fakeReviews);
console.log(fakeUsers)
