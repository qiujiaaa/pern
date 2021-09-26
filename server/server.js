const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
app.use(morgan('combined'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}.`);
});
