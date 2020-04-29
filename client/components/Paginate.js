import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

const Paginate = ({currentPage, itemsPerPage, totalItems, handleChange}) => {
  let active = currentPage
  let items = []

  for (let number = 1; number <= totalItems / itemsPerPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handleChange(number)}
      >
        {number}
      </Pagination.Item>
    )
  }

  const paginationBasic = (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  )

  return paginationBasic
}

export default Paginate
