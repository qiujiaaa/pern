import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import RestaurantsApi from '../../apis/RestaurantsApi';
import { RestaurantsContext } from '../../context/RestaurantsContext';
import Ratings from '../Ratings';
import AddReview from './AddReview';
import Reviews from './Reviews';

const Restaurant = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantsApi.get(`/${id}`);
        setSelectedRestaurant(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <div>
      {selectedRestaurant && (
        <>
          {selectedRestaurant.restaurant && (
            <>
              <h1 className="font-weight-light display-1 text-center">
                {selectedRestaurant.restaurant.name}
              </h1>
              <div className="text-center">
                {renderRating(selectedRestaurant.restaurant)}
              </div>
              <div className="mt-3">
                <Reviews reviews={selectedRestaurant.reviews} />
              </div>

              <AddReview />
            </>
          )}
          {!selectedRestaurant.restaurant && (
            <h1 className="font-weight-light display-1 text-center">
              Error. No restaurant available.
            </h1>
          )}
        </>
      )}
    </div>
  );
};

export default Restaurant;
