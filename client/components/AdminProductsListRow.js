import React from 'react'

const AdminProductsListRow = props => {
  const {product} = props
  return (
    <tr>
      <td className="products-list-photo">
        <img src={product.photo} />
      </td>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.stock}</td>
      <td>{product.price / 100}</td>
      <td>{product.category}</td>
      <td>{product.origin}</td>
    </tr>
  )
}

export default AdminProductsListRow
