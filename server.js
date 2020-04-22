const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const register = require('@react-ssr/express/register');

const app = express();
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const PORT = 3000;

(async () => {
  await register(app);

  app.get('/', (req, res) => {
    const message = 'Hello World!';
    res.render('index', { message });
  });

  app.listen(PORT, () => {
    console.log('> Ready on http://localhost:3000');
  });

})();