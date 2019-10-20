
// ------------------ WHAT DOES index.js DO? ------------------
// 0 - nodemon index.js
// 1 - Set configurations (See below).
// 2 - Link to and Calls db.js. db.js will return functions results.rows from Postgres (See db.js). Stores function result.rows as const
// 3 - Call routes and pass const functions for result.rows
// 4 - Listen on Port 3000


/* ===================================================
 * ======           1. CONFIGURATION         =========
=================================================== */

//Requires dependencies
const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
//Initiate and configures express
const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(methodOverride('_method')); //Allows to use PUT/DELETE
app.use(cookieParser()); //Converts cookies from string to objects
app.use(express.static('public')); //Allows access to public files (CSS and JS)
// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
//Express will draw JSX files from views
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);
//Express will draw CSS files from public
app.use(express.static(__dirname+'/public'))

/* ===================================================
 * ======            2. DATABASE             =========
=================================================== */

// allModels = all results.rows from pool.query() to postgres.
const allModels = require('./db');

/* ===================================================
 * ======             3. ROUTES              =========
=================================================== */

// call it and pass in the "app" so that we can set routes on it (also models)
const setRoutesFunction = require('./routes');
setRoutesFunction(app, allModels);

/* ===================================================
 * ======             4. PORTS               =========
=================================================== */

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port ' + PORT + ' ~~~'));
let onClose = function() {
    server.close(() => {
        console.log('Process terminated')
        allModels.pool.end(() => console.log('Shut down db connection pool'));
    })
};
process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);