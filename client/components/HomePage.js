import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Grace Chopper</h1>
      <p className="lead">Your One Stop Shop for High Quality Kitchen Knives</p>
      <hr className="my-4" />
      <p>Your perfect knife is just one click away</p>
      <Link to="/products" className="btn btn-primary btn-lg" role="button">
        Products
      </Link>
    </div>
  )
}

export default HomePage
