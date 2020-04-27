
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
    user: 'Vignesh',
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
 */

const allTweedrModelsFunction = require('./models/tweedr');
const tweedrModelsObject = allTweedrModelsFunction(pool);

const allRegistrationModelsFunction = require('./models/registration');
const registrationModelsObject = allRegistrationModelsFunction(pool);

const allLoginModelsFunction = require('./models/login');
const loginModelsObject = allLoginModelsFunction(pool);

const allHashtagModelsFunction = require('./models/hashtags')
const hashtagModelsObject = allHashtagModelsFunction(pool);


module.exports = {
  //make queries directly from here
  queryInterface: (text, params, callback) => {
    return pool.query(text, params, callback);

  },

  // get a reference to end the connection pool at server end
  pool:pool,

  // users: userModelsObject,
  tweedr: tweedrModelsObject,
  registration: registrationModelsObject,
  login: loginModelsObject,
  hashtags: hashtagModelsObject

};
