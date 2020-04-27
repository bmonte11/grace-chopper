import React from 'react'
import {withRouter} from 'react-router-dom'

const AdminProductsListRow = withRouter(props => {
  const {product} = props
  const path = `/account/admin/products/${product.id}`
  return (
    <tr onClick={() => props.history.push(path)}>
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
})

export default AdminProductsListRow
