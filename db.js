//======             CONFIGURATION          =========

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
    user: 'nausheen',
    host: '127.0.0.1',
    database: 'tweedr',
    port: 5432
  };
}

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

//======        REQUIRE MODEL FILES         =========

/*const allPokemonModelsFunction = require('./models/pokemon');

const pokemonModelsObject = allPokemonModelsFunction( pool );*/
const userModelsFunction = require('./models/users');
const userModelsObject = userModelsFunction(pool);
const tweetModelsFunction = require('./models/tweets');
const tweetModelsObject = tweetModelsFunction(pool);
const hashwordModelsFunction = require('./models/hashtags');
const hashwordModelsObject = hashwordModelsFunction(pool);
const favoritesModelsFunction = require('./models/favorites');
const favoritesModelsObject = favoritesModelsFunction(pool);


//======          MODULE EXPORTS            =========

module.exports = {
  //make queries directly from here
  queryInterface: (text, params, callback) => {
    return pool.query(text, params, callback);
  },

  // get a reference to end the connection pool at server end
  pool:pool,

  //ADD APP MODELS HERE

  // users: userModelsObject,
  //pokemon: pokemonModelsObject
  users: userModelsObject,
  tweets: tweetModelsObject,
  hashtags:hashwordModelsObject,
  favorites: favoritesModelsObject

};