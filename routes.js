// routes all need access to the app and db

module.exports = (app, db) => {

  // require the controller which has a functon for each route
  const tweets = require('./controllers/tweets');

  app.get('/', tweets.all);
  app.get('/tweets/:id', tweets.one);
};
