'use strict'

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

// const getRandomPrice = (min, max) => {
//   min = Math.ceil(min * 100)
//   max = Math.floor(max * 100)
//   return Math.floor(Math.random() * (max - min + 1)) / 100
// }

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
    return 'cart'
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
      stock: getRandomInt(1, 20),
      price: getRandomInt(30, 1000),
      category: pickRandomCategory(),
      origin: pickRandomOrigin(),
      photo: '/images/default-knife.jpg'
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
      rating: getRandomInt(0, 5),
      title: faker.lorem.words()
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

makeFakeOrders(200)
// userId
makeFakeProducts(200)
makeFakeItems(200)
// productId orderId
makeFakeReviews(200)
// userId productId
makeFakeUsers(200)

// console.log(fakeOrders);
// console.log(fakeProducts);
// console.log(fakeItems);
// console.log(fakeReviews);
// console.log(fakeUsers)

async function Seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const orders = await Order.bulkCreate(fakeOrders)
  const products = await Product.bulkCreate(fakeProducts)
  const items = await Item.bulkCreate(fakeItems)
  const reviews = await Review.bulkCreate(fakeReviews)
  const users = await User.bulkCreate(fakeUsers)

  await Promise.all(
    orders.map((order, i) => {
      return order.setUser(users[i])
    })
  )
  await Promise.all(
    items.map((item, i) => {
      return item.setOrder(orders[i])
    })
  )
  await Promise.all(
    items.map((item, i) => {
      return item.setProduct(products[i])
    })
  )
  await Promise.all(
    reviews.map((review, i) => {
      return review.setUser(users[i])
    })
  )
  await Promise.all(
    reviews.map((review, i) => {
      return review.setProduct(products[i])
    })
  )

  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded ${items.length} items`)
  console.log(`seeded ${reviews.length} reviews`)
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await Seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')

    await db.close()

    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = Seed
