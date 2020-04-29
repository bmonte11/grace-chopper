import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <div className="jumbotron" id="homepage-container">
        <h1 className="display-1">Grace Chopper</h1>
        <p className="lead">
          Your One Stop Shop for High Quality Kitchen Knives
        </p>
        <hr className="my-4" />
        <p id="jumbotron-slogan">Your perfect knife is just one click away</p>
        <Link to="/products" className="btn btn-info btn-lg" role="button">
          Products
        </Link>
      </div>
    </div>
  )
}

export default HomePage
