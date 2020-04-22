/*
 * ===================================================
 * CONFIGURATION 
 * ===================================================
 */

const pg = require('pg');
const url = require('url');

var configs;

if (process.env.DATABASE_URL) {

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };

} else {
  configs = {
    user: 'joyce',
    host: '127.0.0.1',
    database: 'tweedr',
    port: 5432
  };
}


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});



/*
 * ===================================================
 *  REQUIRE MODEL FILES 
 * ===================================================
 */


const userModelsFunction = require('./models/users');
const userModelsObject = userModelsFunction(pool);

const tweetModelsFunction = require('./models/tweets');
const tweetModelsObject = tweetModelsFunction(pool);


/*
 * ===================================================
 *  MODULE EXPORTS 
 * ===================================================
 */


module.exports = {
  queryInterface: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
  pool: pool,

  /*
   * ADD APP MODELS HERE
   */

  users: userModelsObject,
  tweets: tweetModelsObject
};
