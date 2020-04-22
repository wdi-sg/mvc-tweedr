// routes all need access to the app and db

module.exports = (app, db) => {

  // require the controller which has a functon for each route
  const tweets = require('./controllers/tweets')(db);

  app.get('/', tweets.index);
  app.get('/:id', tweets.view);
};
