//configure



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
    user: 'apple',
    host: '127.0.0.1',
    database: 'tweedr_db',
    port: 5432
  };
}


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});





//REQUIRE MODEL FILES



const allPokemonModelsFunction = require('./models/pokemon');
const pokemonModelsObject = allPokemonModelsFunction( pool );
const userFunction = require('./models/user');
const userModelsObject = userFunction( pool );
const tweetFunction = require('./models/tweet');
const tweetModelsObject =  tweetFunction( pool );

const newHashtag = document.createElement('form');
newHashtag.innerHTML = `<input type='submit' value='Add Hashtag'/><br/><br/>`;
newHashtag.setAttribute('method', 'GET');
newHashtag.setAttribute('action', '/hashtags/new');


//MODULE EXPORTS



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
  tweets: tweetModelsObject,
  users: userModelsObject,
  pokemon: pokemonModelsObject
};
© 2020 GitHub, Inc.