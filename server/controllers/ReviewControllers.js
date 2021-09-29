const db = require('../database');

const addReview = async (req, res) => {
  try {
    const result = await db.query(
      'insert into reviews (restaurant_id, name, detail, rating) values ($1, $2, $3, $4) returning *',
      [req.params.id, req.body.name, req.body.detail, req.body.rating]
    );
    res.status(200).json({
      status: 'success',
      results: result.rows.length,
      data: { review: result.rows[0] },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addReview };
