const getAllRestaurants = (req, res) => {
  res.json({ message: 'These are the restaurants' });
};

const getRestaurant = (req, res) => {
  res.json({ message: `Add ${req.params.id}` });
};

const editRestaurant = (req, res) => {
  res.json({ message: `Edit ${req.body}` });
  console.log(req.body);
};

const deleteRestaurant = (req, res) => {
  res.json({ message: `Delete ${req.params.id}` });
};

module.exports = {
  getAllRestaurants,
  getRestaurant,
  editRestaurant,
  deleteRestaurant,
};
