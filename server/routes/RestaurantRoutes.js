const express = require('express');

const {
  getAllRestaurants,
  getRestaurant,
  editRestaurant,
  deleteRestaurant,
} = require('../controllers/RestaurantControllers');

const router = express.Router();

router.get('/', getAllRestaurants);
router.get('/:id', getRestaurant);
router.put('/:id', editRestaurant);
router.delete('/:id', deleteRestaurant);

module.exports = router;
