const router = require('express').Router()
const authorize = require('../middleware/authorization.middleware')
const {
  getAllTweets
} = require('../controllers/tweets.controller')


router.get('/dashboard', authorize, (req, res)=> {
  const userData = res.userData? ({userData:res.userData}): undefined
  res.render('dashboard',userData)
})


router.get('/tweets', getAllTweets)

module.exports = router

