//  CONFIGURATION
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
    user: 'herda',
    host: '127.0.0.1',
    database: 'assignments',
    port: 5432
  };
}


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});



//  REQUIRE MODEL FILES
const allTweedrModels = require('./models/tweedr');

 //  EXPORT AN OBJECT WITH EVERY SINGLE MODEL IN IT
const tweedrModelsObject = allTweedrModels(pool);

// //  GIVE THE MODEL THE DB HANDLER POOL
// const tweedrForExport = allTweedrModels(pool);


//  SEND THIS BACK OUT
module.exports = {
    // //  ADD APP MODELS HERE
    // allTweedrModels: tweedrForExport,

    //  GET A REFERENCE TO END THE CONNECTION POOL AT SERVER END
    pool:pool,

    //  ADD APP MODELS HERE
    tweedr: tweedrModelsObject
};