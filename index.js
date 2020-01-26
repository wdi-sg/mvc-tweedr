const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const pg = require('pg');
const url = require('url');
const sha256 = require('js-sha256');

// // get the thing that contains all the routes
// const setRoutesFunction = require('./routes');
// // call it and pass in the "app" so that we can set routes on it (also models)
// setRoutesFunction(app, allModels);

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

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
    user: 'AngelFerreros',
    host: '127.0.0.1',
    database: 'tweedr',
    port: 5432
  };
}


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

// Init express app
const app = express();

// Set up middleware
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

/**
 * ===================================
 *                DB
 * ===================================
 */

// db contains *ALL* of our models
const allModels = require('./db');

/**
 * ===================================
 * Routes
 * ===================================
 */
app.get('/register', (req, res)=>{
  res.render('signpage');
});

app.post('/register', (req,res)=>{
  let insertQueryText = 'INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *';
  console.log(req.body.password);
  let hashedPw = sha256(req.body.password);
  console.log(hashedPw);
  const values = [
    req.body.username,
    hashedPw
  ];

  pool.query(insertQueryText, values, (err, result)=>{
    if(err){
      console.log('ERROR:', err);
      res.send('ERROR')
    }else{
      console.log('DONE', result.rows)
      let hashedUn = sha256(req.body.username);
      res.cookie('logged_in', true);
      res.cookie('username', hashedUn);
      res.redirect('signpage');
    }
  });
});


app.get('/login', (req, res) => {
    res.render('feed');
});

app.post('/login',(req,res)=>{

});










/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port '+PORT+' ~~~'));

let onClose = function(){

  server.close(() => {
    console.log('Process terminated')
    allModels.pool.end( () => console.log('Shut down db connection pool'));
  })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);
