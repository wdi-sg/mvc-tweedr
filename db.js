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
    user: 'sirron',
    host: '127.0.0.1',
    database: 'testdb',
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

//db for pokemon
const allPokemonModelsFunction = require('./models/pokemon');
const pokemonModelsObject = allPokemonModelsFunction( pool );

//db for register
const allRegisterUserFunction = require('./models/register');
const registerUserObject = allRegisterUserFunction( pool );

//db for login
const loginUserFunction = require('./models/login');
const loginUserObject = loginUserFunction( pool );

//db for adding new tweets
const newTweetsFunction = require('./models/tweets');
const newTweetsObject = newTweetsFunction( pool );

//db for listing tweets
const listTweetsFunction = require('./models/tweets');
const listTweetsObject = listTweetsFunction( pool );

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
  pokemon: pokemonModelsObject,
  registerUser: registerUserObject,
  loginUser: loginUserObject,
  newTweets: newTweetsObject,
  listAllTweets: listTweetsObject
};
