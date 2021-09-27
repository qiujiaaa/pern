const { Pool } = require('pg');

// dont need to put in the env variables if we name them according to the documentation
const pool = new Pool();

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
