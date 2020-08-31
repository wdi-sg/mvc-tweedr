const pg = require('pg');

const configs = {
    user: 'wongjoey',
    host: '127.0.0.1',
    database: 'tweedr',
    port: 5432,
  };
  
  const pool = new pg.Pool(configs);
  
  pool.on('error', function (err) {
    console.log('idle client error', err.message, err.stack);
  });

  const tweedrModelsFunction = require('./models/tweedr_model');
  const tweedModelsFunction = require('./models/tweed_model');

  const poolTweedrModelsObject = tweedrModelsFunction(pool);
  const poolTweedModelsObject = tweedModelsFunction(pool);

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
  
    tweedr: poolTweedrModelsObject,
    tweed: poolTweedModelsObject
  };
