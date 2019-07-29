const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */



// Init express app
const app = express();

// Set up middleware
app.use(methodOverride('_method'));

app.use(cookieParser());

app.use(express.static('public'));

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
 * ===================================
 *                DB
 * ===================================
 * ===================================
 */

// db contains *ALL* of our models
const allModels = require('./db');

/**
 * ===================================
 * ===================================
 * Routes
 * ===================================
 * ===================================
 */

// get the thing that contains all the routes
const setRoutesFunction = require('./routes');

// call it and pass in the "app" so that we can set routes on it (also models)
setRoutesFunction(app, allModels);

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */

var testRoute = (request, response) => {
    console.log("test route");
    response.send("Hey this route works!");
}; //testruote CT

var registerUser = (request, response) => {
    console.log("register route setup");

    //process user's input into objects
    let userInput = request.body;
    let newData = {};
    newData.password = sha256(userInput.password);
    newData.name = userInput.name;

    //Check if there is existing username
    let existingAcc = "SELECT name FROM users WHERE name=$1";
    let values = [newData.name];

    pool.query(existingAcc, values, (error,result) => {

        if (error) {
            console.log("query error", err.stack);
            response.send("Unable to check database")
        }// if CT

        else{
            //since username does not exist check account

        }

    })//pool.query CT



    response.send("error checking database");


}//registerUser CT






app.get('/test', testRoute);

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