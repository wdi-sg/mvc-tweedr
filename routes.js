// routes all need access to the app and db

module.exports = (app, db) => {

  // require the controller which has a functon for each route
  const controller = require('./controllers/generic_c')(db);

  app.get('/', controller.index);
  app.get('/:id', controller.view);
};
