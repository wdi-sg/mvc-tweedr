// controller module
// contains functions that a route will call
// db gets passed in here
module.exports = (db) => {

  const index = (req, res) => {
    const updateView = (results) => {
      res.send(results.rows);
    };

    db.tweets.getAll()
      .then((res) => updateView(res))
      .catch((err) => {
        console.log(err);
        res.send(err.message);
      });
  };

  const view = (req, res) => {
    const updateView = (results) => {
      res.send(results.rows);
    };

    let id = req.params.id;
    db.tweets.getOne(id)
      .then((res) => updateView(res))
      .catch((err) => {
        console.log(err);
        res.send(err.message);
      });
  };

  return {
    index,
    view
  };
};
