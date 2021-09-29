import React from 'react';
import Ratings from '../Ratings';

const Reviews = ({ reviews }) => {
  return (
    <div className="row row-cols-3 mb-2 g-6">
      {reviews &&
        reviews.map((review) => (
          <div className="col" key={review.id}>
            <div className="card text-dark bg-light">
              <div className="card-header d-flex justify-content-between">
                <div>{review.name}</div>
                <div>
                  <Ratings rating={review.rating} />
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">{review.detail}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Reviews;
