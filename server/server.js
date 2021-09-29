const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const restaurantRoutes = require('./routes/RestaurantRoutes');
const reviewRoutes = require('./routes/ReviewRoutes');

const app = express();

app.use(cors());

// logging dev
app.use(morgan('dev'));

// middleware parse JSON bodies | parse URL-encoded bodies
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const port = process.env.PORT || 5000;

app.use('/api/v1/restaurants', restaurantRoutes);
app.use('/api/v1/reviews', reviewRoutes);

app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}.`);
});
