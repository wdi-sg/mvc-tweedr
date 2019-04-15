console.log("starting up!!");

const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');

// Initialise postgres client
const configs = {
  user: 'll',
  host: '127.0.0.1',
  database: 'tweeder',
  port: 5432,
};

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(methodOverride('_method'));


// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

const sha256 = require('js-sha256');
const cookieParser = require('cookie-parser')
app.use(cookieParser());

const SALT = 'ABC123'

/**
 * ===================================
 * Routes
 * ===================================
 */

//index
app.get('/artist', (request, response) => {
    const queryString = 'SELECT * from artists';
    pool.query(queryString, (errorObj, result) => {
        if (errorObj === undefined) {
            console.log('query result:', result.rows);
            const data = { artists : result.rows};
            response.render('home', data);
        } else {
            console.error('query error:', errorObj.stack);
            response.send( 'query error' );
        }
    });
})

//create tweet
app.get('/tweet/:id', (request,response)=> {
    response.render('tweet');
})

app.post('/tweet/:id', (request,response)=> {
    const queryString = 'INSERT INTO tweets (tweet, tweeter) VALUES ($1,$2) RETURNING *';
    value = [request.body.tweet,request.params.id];
    console.log(request.body);
    console.log(request.params.id);
    pool.query(query, value, (errorObj,result)=> {
        if (errorObj) {
            console.log("something went wrong in tweet-post", errorObj);
        }
    response.redirect('/');
    })
})

//register
app.get('/register', (request,response)=> {
    response.render('register',);
})

app.post('/register',(request,response)=> {
    let query = 'INSERT INTO users (username, password) VALUES ($1,$2) RETURNING *';
    let hash = sha256(request.body.password);
    let value = [request.body.username, hash];
    pool.query(query, value, (errorObj,result)=> {
        if (errorObj) {
            console.log("something went wrong in register-post", errorObj);
        }
    let hash1 = sha256( SALT + request.body.username);
    response.cookie('username', request.body.username);
    response.cookie('loggedIn', hash1);
    response.redirect('/');
    })
})

//login
app.get('/login', (request,response)=> {
    response.render('login',);
})

app.post('/login',(request,response)=> {
    let query = "SELECT password FROM users WHERE username = '" + request.body.username + "'";
    let hash = sha256(request.body.password);
    pool.query(query, (errorObj,result)=> {
    console.log(result.rows[0])
        if (result.rows.length >=1 ) {
            if (result.rows[0] === hash) {
                console.log(result.rows[0]);
                console.log(hash);
                let hash1 = sha256( SALT + request.body.username);
                response.cookie('username', request.body.username);
                response.cookie('loggedIn', hash1);
                response.redirect('/artist');
            }
        }
    })
})


/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const server = app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

let onClose = function(){

  console.log("closing");

  server.close(() => {

    console.log('Process terminated');

    pool.end( () => console.log('Shut down db connection pool'));
  })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);