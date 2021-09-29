import React, { useState } from 'react';
import { useParams } from 'react-router';

import ReviewsApi from '../../apis/ReviewsApi';

const AddReview = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = async () => {
    try {
      await ReviewsApi.post(`/${id}`, {
        name,
        detail,
        rating,
      });
      setName('');
      setDetail('');
      setRating(1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mb-2">
      <form action="">
        <div className="row align-items-center mb-3">
          <div className="col">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col">
            <label htmlFor="rating" className="form-label">
              Rating
            </label>
            <select
              id="rating"
              className="form-select"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="row align-items-center mb-3">
          <div className="mb-3">
            <label htmlFor="detail" className="form-label">
              Details
            </label>
            <textarea
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              className="form-control"
              id="detail"
              cols="30"
              row="10"
            />
          </div>
          <div className="col-auto">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              Add Review
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
