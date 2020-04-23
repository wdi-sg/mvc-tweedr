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
    user: 'kenneththesheep',
    host: '127.0.0.1',
    database: 'tweedr',
    port: 5432
  };
}

const sha256 = require('js-sha256');
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


const allPokemonModelsFunction = require('./models/pokemon');

const pokemonModelsObject = allPokemonModelsFunction( pool );

const allHomeModelsFunction = require('./models/home');

const homeModelsObject = allHomeModelsFunction( pool );

const allLoginModelsFunction = require('./models/login');

const loginModelsObject = allLoginModelsFunction( pool );

const allRegisterModelsFunction = require('./models/register');

const registerModelsObject = allRegisterModelsFunction( pool );

const allUserModelsFunction = require('./models/user');

const userModelsObject = allUserModelsFunction( pool );

const allfollowModelsFunction = require('./models/follow');

const followModelsObject = allfollowModelsFunction( pool );

const alltweetModelsFunction = require('./models/tweet');

const tweetModelsObject = alltweetModelsFunction( pool );
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
  home: homeModelsObject,
  login: loginModelsObject,
  register: registerModelsObject,
  user: userModelsObject,
  follow: followModelsObject,
  tweet: tweetModelsObject,

};