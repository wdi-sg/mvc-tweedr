const router = require('express').Router()
const { registerUser, loginUser } = require('../controllers/auth.controller')
const { validateAuth } = require('../controllers/validation.controller')
const { body } = require('express-validator')

router.post('/register', validateAuth([
  body('username').not().isEmpty()
    .withMessage('Username is required.')
    .trim(),
  body('password').not().isEmpty()
    .withMessage('Password is required.')
    .trim()
]), registerUser)

router.post('/login', validateAuth([
  body('username').not().isEmpty()
    .withMessage('Username is required.')
    .trim(),
  body('password').not().isEmpty()
    .withMessage('Password is required.')
    .trim()
]), loginUser)

module.exports = router

