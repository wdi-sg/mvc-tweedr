const router = require('express').Router()
const { registerUser, loginUser } = require('../controllers/auth.controller')
const { validateAuthInput } = require('../middleware/validation.middleware')
const { body } = require('express-validator')

//
router.post('/register', validateAuthInput([
  body('username').not().isEmpty()
    .withMessage('Username is required.')
    .trim(),
  body('password').not().isEmpty()
    .withMessage('Password is required.')
    .trim()
]), registerUser)

router.post('/login', validateAuthInput([
  body('username').not().isEmpty()
    .withMessage('Username is required.')
    .trim(),
  body('password').not().isEmpty()
    .withMessage('Password is required.')
    .trim()
]), loginUser)


module.exports = router

