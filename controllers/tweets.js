// controller module
// contains functions that a route will call

const Tweet = require('../models/tweets.js');

const all = (req, res) => {
  const updateView = (results) => {
    res.send(results.rows);
  };

  Tweet.getAll()
    .then((res) => updateView(res))
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
};

const one = (req, res) => {
  const updateView = (results) => {
    res.send(results.rows);
  };

  let id = req.params.id;
  Tweet.getOne(id)
    .then((res) => updateView(res))
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
};

module.exports = {
  all,
  one
};
