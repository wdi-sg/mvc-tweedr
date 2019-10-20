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
		user: 'Daniel',
		host: '127.0.0.1',
		database: 'tweeder',
		port: 5432
	};
}

const pool = new pg.Pool(configs);

pool.on('error', function(err) {
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

const allTweetModels = require('./models/tweets');
// const detailsModelObject = require('./models/register');

const tweetsModelObject = allTweetModels(pool);
// const detailsModelObject = allDetailsModels(pool);

const registerUser = require('./models/register');
const user = registerUser(pool);

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
	pool: pool,

	/*
   * ADD APP MODELS HERE
   */

	// users: userModelsObject,
	tweets: tweetsModelObject,
	user: user
};
