import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'

const Paginate = ({currentPage, itemsPerPage, totalItems, handleChange}) => {
  let active = currentPage
  let items = []
  for (let number = 1; number <= totalItems / itemsPerPage; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    )
  }

  const paginationBasic = (
    <div>
      <Pagination>{items}</Pagination>
      <br />

      <Pagination size="lg">{items}</Pagination>
      <br />

      <Pagination size="sm">{items}</Pagination>
    </div>
  )

  return paginationBasic
}

export default Paginate
