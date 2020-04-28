import React from 'react'

const AdminSingleProduct = props => {
  return (
    <div>
      <div>This will be something soon</div>
      <div>{`Param: ${props.match.params.productId}`}</div>
    </div>
  )
}

export default AdminSingleProduct
