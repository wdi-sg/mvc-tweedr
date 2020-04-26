/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======             CONFIGURATION          =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */



const pg = require('pg');
const url = require('url');

var configs;

if( process.env.DATABASE_URL ){

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

}else{
  configs = {
    user: 'postgres',
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
 * ===================================================
 * ===================================================
 * ===================================================
 * ======        REQUIRE MODEL FILES         =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */

// Home Page files
const allIndexModelsFunction = require('./models/index');

const indexModelsObject = allIndexModelsFunction(pool);

// Registration files
const allRegistrationModelsFunction = require('./models/registration');

const registrationModelsObject = allRegistrationModelsFunction(pool);

// Login files
const allLoginModelsFunction = require('./models/login');

const loginModelsObject = allLoginModelsFunction(pool);

// profile page files
const allProfileModelsFunction = require('./models/profile');

const profileModelsObject = allProfileModelsFunction(pool);

// hashtag page files
const allHashtagModelsFunction = require('./models/hashtag');

const hashtagModelsObject = allHashtagModelsFunction(pool);

/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======          MODULE EXPORTS            =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */


module.exports = {
  //make queries directly from here
  queryInterface: (text, params, callback) => {
    return pool.query(text, params, callback);
  },

  // get a reference to end the connection pool at server end
  pool:pool,

  /*
   * ADD APP MODELS HERE
   */

  // users: userModelsObject,
  registration: registrationModelsObject,
  login: loginModelsObject,
  index: indexModelsObject,
  profile: profileModelsObject,
  hashtag: hashtagModelsObject
};