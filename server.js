const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const register = require('@react-ssr/express/register');
const { handle404, handle500} = require('./controllers/errors')


const app = express();
app.use(methodOverride('_method'));
app.use(cookieParser());
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


const APP_ROOT = '/'
const PORT = 3000;

(async () => {
  await register(app);

  app.get(APP_ROOT, (req, res) => {
    res.render('index');
  });


  app.use(handle404)
  app.use(handle500)


  app.listen(PORT, () => {
    console.log('> Ready on http://localhost:3000');
  });

})();