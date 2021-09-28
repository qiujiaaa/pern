import React, { useState, useContext } from 'react';

import RestaurantsApi from '../../apis/RestaurantsApi';
import { RestaurantsContext } from '../../context/RestaurantsContext';

const Add = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [pricerange, setPricerange] = useState('Price Range');
  const { addRestaurant } = useContext(RestaurantsContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantsApi.post('/', {
        name,
        location,
        price_range: pricerange,
      });
      addRestaurant(response.data.data.restaurants);
      setName('');
      setLocation('');
      setPricerange('Price Range');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mb-4">
      <form action="">
        <div className="row align-items-center">
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              placeholder="Location"
            />
          </div>
          <div className="col">
            <select
              className="form-select"
              value={pricerange}
              onChange={(e) => setPricerange(e.target.value)}
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="col-auto">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
