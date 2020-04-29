import React from 'react'

const SingleOrder = ({order}) => {
  const items = order.items
  return items.map(item => {
    return (
      <div className="card" id="orders" key={item.id}>
        <img src={item.product.photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{item.product.name}</p>
          <p>${item.salePrice.toFixed(2)}</p>
        </div>
      </div>
    )
  })
}

export default SingleOrder
