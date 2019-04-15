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
    user: 'akira',
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


const allPokemonModelsFunction = require('./models/pokemon');
const pokemonModelsObject = allPokemonModelsFunction( pool );


const allUserModelsFunction = require('./models/user');
const userModelsObject = allUserModelsFunction( pool );
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

var React = require("react");

class Register extends React.Component {
  render() {
    return (
      <html>
        <body>
          <h3>Hello Register</h3>
                <form method="POST" action="/register">
                    <input name="name" placeholder="name"/>
                    <input name="password" placeholder="pass"/>
                    <input type="submit"/>
                </form>

        </body>
      </html>
    );
  }
}

module.exports = Register;