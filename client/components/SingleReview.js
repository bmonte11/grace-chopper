import React from 'react'

const SingleReview = props => {
  const review = props.review
  return (
    <div className="review">
      <h4>{`${review.title} - ${review.rating}/5 Stars`}</h4>
      <div>{`Reviewed by ${review.user.firstName} ${review.user.lastName}`}</div>
      <p>{review.content}</p>
    </div>
  )
}

export default SingleReview
