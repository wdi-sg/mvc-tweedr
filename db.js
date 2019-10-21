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
    user: 'siewling',
    host: '127.0.0.1',
    database: 'mariatweedr',
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


const allPokemonModelsFunction = require('./models/all');

const allModelsObject = allPokemonModelsFunction ( pool );


const registerUserModelsFunction = require('./models/all');
const registerUserModelsObject = registerUserModelsFunction( pool );

const loginUserModelsFunction = require('./models/all');
const userLoginModelsObject = loginUserModelsFunction( pool );

const allTweetsModelsFunction = require('./models/all');
const allTweetsModelsObject = allTweetsModelsFunction( pool );



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

//not sure if I need these, since all my models are in one file

  // users: userModelsObject,
  all: allModelsObject,
  register: registerUserModelsObject,
  login: userLoginModelsObject,
  tweets: allTweetsModelsObject




};