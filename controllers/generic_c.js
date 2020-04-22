// controller module
// contains functions that a route will call
// db gets passed in here
module.exports = (db) => {

  // generic route function, no params
  const index = (request, response) => {

    const updateView = (error, results) => {
      if (error) {
        console.log(error);
        response.send(error);
      } else {
        response.render('viewmodule1', { results });
      }
    };

    db.model.getAll(updateView);
  };

  // generic route function, with params
  const view = (request, response) => {
    let params = [request.params];
    const updateView = (error, results) => {
      if (error) {
        console.log(error);
        response.send(error);
      } else {
        response.render('viewmodule2', { results });
      }
    };

    db.model.getSome(params, updateView);
  };

  return {
    index,
    view
  };
};
