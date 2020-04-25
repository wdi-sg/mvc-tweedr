const router = require('express').Router()
const authorize = require('../middleware/authorization.middleware')

router.get('/dashboard', authorize, (req, res)=> {
  res.render('dashboard')
})

module.exports = router

