import React from 'react'
import axios from 'axios'
import {CartItem} from './CartItem'
const dummyData = [
  {
    id: 1,
    name: 'Small Rubber Bike Knife',
    description: 'Diverse executive challenge',
    quantity: 15,
    price: 730,
    category: 'Other',
    origin: 'Japanese',
    photo: '/images/default-knife.jpg',
    createdAt: '2020-04-22T23:20:29.304Z',
    updatedAt: '2020-04-22T23:20:29.304Z'
  },
  {
    id: 2,
    name: 'Ergonomic Rubber Towels Knife',
    description: 'Expanded zero defect workforce',
    quantity: 15,
    price: 84,
    category: 'Other',
    origin: 'Japanese',
    photo: '/images/default-knife.jpg',
    createdAt: '2020-04-22T23:20:29.304Z',
    updatedAt: '2020-04-22T23:20:29.304Z'
  },
  {
    id: 3,
    name: 'Tasty Granite Cheese Knife',
    description: 'Customer-focused fresh-thinking synergy',
    quantity: 20,
    price: 463,
    category: 'Other',
    origin: 'Japanese',
    photo: '/images/default-knife.jpg',
    createdAt: '2020-04-22T23:20:29.304Z',
    updatedAt: '2020-04-22T23:20:29.304Z'
  },
  {
    id: 4,
    name: 'Sleek Wooden Pants Knife',
    description: 'Realigned secondary process improvement',
    quantity: 9,
    price: 255,
    category: 'Chef',
    origin: 'Western',
    photo: '/images/default-knife.jpg',
    createdAt: '2020-04-22T23:20:29.304Z',
    updatedAt: '2020-04-22T23:20:29.304Z'
  },
  {
    id: 5,
    name: 'Tasty Soft Shoes Knife',
    description: 'Synergistic actuating secured line',
    quantity: 11,
    price: 173,
    category: 'Other',
    origin: 'Other',
    photo: '/images/default-knife.jpg',
    createdAt: '2020-04-22T23:20:29.304Z',
    updatedAt: '2020-04-22T23:20:29.304Z'
  },
  {
    id: 6,
    name: 'Tasty Rubber Chips Knife',
    description: 'Horizontal real-time encryption',
    quantity: 12,
    price: 768,
    category: 'Other',
    origin: 'Japanese',
    photo: '/images/default-knife.jpg',
    createdAt: '2020-04-22T23:20:29.304Z',
    updatedAt: '2020-04-22T23:20:29.304Z'
  },
  {
    id: 7,
    name: 'Handmade Soft Sausages Knife',
    description: 'Devolved maximized local area network',
    quantity: 17,
    price: 267,
    category: 'Chef',
    origin: 'Japanese',
    photo: '/images/default-knife.jpg',
    createdAt: '2020-04-22T23:20:29.304Z',
    updatedAt: '2020-04-22T23:20:29.304Z'
  },
  {
    id: 8,
    name: 'Incredible Wooden Bacon Knife',
    description: 'Ergonomic system-worthy time-frame',
    quantity: 15,
    price: 793,
    category: 'Other',
    origin: 'Japanese',
    photo: '/images/default-knife.jpg',
    createdAt: '2020-04-22T23:20:29.304Z',
    updatedAt: '2020-04-22T23:20:29.304Z'
  },
  {
    id: 9,
    name: 'Handcrafted Soft Chair Knife',
    description: 'Re-contextualized radical internet solution',
    quantity: 10,
    price: 943,
    category: 'Utility',
    origin: 'Japanese',
    photo: '/images/default-knife.jpg',
    createdAt: '2020-04-22T23:20:29.304Z',
    updatedAt: '2020-04-22T23:20:29.304Z'
  },
  {
    id: 10,
    name: 'Handmade Granite Table Knife',
    description: 'Triple-buffered modular collaboration',
    quantity: 6,
    price: 964,
    category: 'Other',
    origin: 'Japanese',
    photo: '/images/default-knife.jpg',
    createdAt: '2020-04-22T23:20:29.304Z',
    updatedAt: '2020-04-22T23:20:29.304Z'
  }
]

export default class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}
  handleChange() {}
  handleSubmit() {}
  render() {
    return (
      <div>
        <h1>This is the Cart</h1>
        <div className="theCart">
          {dummyData.map(product => {
            return <CartItem item={product} key={product.id} />
          })}
        </div>
        <div className="total">
          This is the calculation for the total price{' '}
        </div>
        <button type="submit">Checkout</button>
      </div>
    )
  }
}

// mapStateToProps = (state) => {
//   return
// }

// mapDispatchToProps = (dispatch) => {}
