const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const routes = require('./routes/RestaurantRoutes');

const app = express();

// logging dev
app.use(morgan('dev'));

// middleware parse JSON bodies | parse URL-encoded bodies
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const port = process.env.PORT || 5000;

app.use('/api/v1/restaurants', routes);

app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}.`);
});
