import React, { useEffect, useContext } from 'react';

import RestaurantsApi from '../../apis/RestaurantsApi';
import { RestaurantsContext } from '../../context/RestaurantsContext';

const List = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  useEffect(() => {
    try {
      const getData = async () => {
        const response = await RestaurantsApi.get('/');
        setRestaurants(response.data.data.restaurants);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await RestaurantsApi.delete(`/${id}`);
      setRestaurants(restaurants.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="list-group">
      <table className="table table-hover table-light table-striped align-middle">
        <thead>
          <tr className="table-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.location}</td>
                <td>{'$'.repeat(item.price_range)}</td>
                <td>RATING</td>
                <td>
                  <button className="btn btn-warning">Update</button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
