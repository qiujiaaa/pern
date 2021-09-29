const db = require('../database');

const getAllRestaurants = async (req, res) => {
  try {
    const results = await db.query(
      'select * from restaurants natural left join (select restaurant_id as id, count(*), trunc(avg(rating), 1) as avg from reviews group by restaurant_id) reviews'
    );
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: { restaurants: results.rows },
    });
  } catch (error) {
    console.log(error);
  }
};

const getRestaurant = async (req, res) => {
  try {
    const restaurant = await db.query(
      'select * from restaurants natural left join (select restaurant_id as id, count(*), trunc(avg(rating), 1) as avg from reviews group by restaurant_id) reviews where id = $1',
      [req.params.id]
    );
    const reviews = await db.query(
      'select * from reviews where restaurant_id = $1',
      [req.params.id]
    );
    res.status(200).json({
      status: 'success',
      results: restaurant.rows.length,
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const addRestaurant = async (req, res) => {
  try {
    const result = await db.query(
      'insert into restaurants (name, location, price_range) values ($1, $2, $3) returning *',
      [req.body.name, req.body.location, req.body.price_range]
    );
    res.status(200).json({
      status: 'success',
      results: result.rows.length,
      data: { restaurants: result.rows[0] },
    });
  } catch (error) {
    console.log(error);
  }
};

const editRestaurant = async (req, res) => {
  try {
    const result = await db.query(
      'update restaurants set name = $1, location = $2, price_range = $3 where id = $4 returning *',
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
    res.status(200).json({
      status: 'success',
      results: result.rows.length,
      data: { restaurants: result.rows[0] },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const result = await db.query('delete from restaurants where id = $1', [
      req.params.id,
    ]);
    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRestaurants,
  getRestaurant,
  addRestaurant,
  editRestaurant,
  deleteRestaurant,
};
