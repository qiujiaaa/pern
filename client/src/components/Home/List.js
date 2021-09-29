import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import RestaurantsApi from '../../apis/RestaurantsApi';
import { RestaurantsContext } from '../../context/RestaurantsContext';
import Ratings from '../Ratings';

const List = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  let history = useHistory();

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

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await RestaurantsApi.delete(`/${id}`);
      setRestaurants(restaurants.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const renderRating = (item) => {
    return (
      <>
        {item.count ? (
          <>
            <Ratings rating={item.avg} />
            <span className="text-warning ml-1">{`(${item.count})`}</span>
          </>
        ) : (
          <span className="text-danger ml-1">No ratings yet.</span>
        )}
      </>
    );
  };

  const handleEdit = async (e, id) => {
    e.stopPropagation();
    history.push(`/restaurants/update/${id}`);
  };

  const handleSelect = (id) => {
    history.push(`/restaurants/${id}`);
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
              <tr onClick={() => handleSelect(item.id)} key={item.id}>
                <td>{item.name}</td>
                <td>{item.location}</td>
                <td>{'$'.repeat(item.price_range)}</td>
                <td>{renderRating(item)}</td>
                <td>
                  <button
                    onClick={(e) => handleEdit(e, item.id)}
                    className="btn btn-warning"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={(e) => handleDelete(e, item.id)}
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
