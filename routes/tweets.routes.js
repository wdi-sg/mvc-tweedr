const router = require('express').Router()
const authorize = require('../middleware/authorization.middleware')

router.get('/dashboard', authorize, (req, res)=> {
  console.log('inside dashboard')
  console.log(req.user)
  console.log('inside dashboard')
  res.render('dashboard')
})

module.exports = router

