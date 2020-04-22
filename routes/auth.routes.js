const router = require('express').Router()
const {registerUser} = require('../controllers/auth.controller')
const  {validateRegistration} = require('../controllers/validation.controller')
const { body } = require('express-validator');

router.post('/register', validateRegistration([
  body('username').not().isEmpty().trim()
    .escape(),
  body('password').not().isEmpty().trim()
]), registerUser)

module.exports = router

