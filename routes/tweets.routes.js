const router = require('express').Router()
const authorize = require('../middleware/authorization.middleware')

router.get('/dashboard', authorize, (req, res)=> {
  console.log(res.userData)
  const userData = res.userData? ({userData:res.userData}): undefined
  res.render('dashboard',userData)
})

module.exports = router

