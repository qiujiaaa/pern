const getAllRestaurants = (req, res) => {
  res.status(200).json({
    message: 'These are the restaurants',
  });
};

const getRestaurant = (req, res) => {
  res.status(200).json({
    message: `Get ${req.params.id}`,
  });
};

const addRestaurant = (req, res) => {
  res.status(201).json({
    message: `Add ${req.body}`,
  });
  console.log(req.body);
};

const editRestaurant = (req, res) => {
  res.status(200).json({
    message: `Edit ${req.body}`,
  });
  console.log(req.body);
};

const deleteRestaurant = (req, res) => {
  res.status(204).json({
    message: `Restaurant deleted.`,
  });
};

module.exports = {
  getAllRestaurants,
  getRestaurant,
  addRestaurant,
  editRestaurant,
  deleteRestaurant,
};
