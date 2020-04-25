require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const register = require('@react-ssr/express/register')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const { handle404, handle500 } = require('./controllers/errors')
const { authRoute, tweetRoutes } = require('./routes/index')

const app = express()
app.use(methodOverride('_method'))
app.use(cookieParser())
app.disable('x-powered-by')
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(cookieParser())
app.use(session({
  secret           : 'tweedr',
  saveUninitialized: false,
  resave           : false
}))

const APP_ROOT = '/'
const PORT = 3000;

(async () => {

  await register(app)

  app.get(APP_ROOT, (req, res) => {
      res.render('index', {
        success: req.session.success,
        errors : req.session.errors
      })
      req.session.errors = null
    }
  )

  app.use(APP_ROOT, authRoute)
  app.use(APP_ROOT, tweetRoutes)

  // last route
  app.use(handle404)
  app.use(handle500)

  app.listen(PORT, () => {
    console.log('> Ready on http://localhost:3000')
  })

})();