const User = require('../models/user.model')
const util = require('util')
const { sign } = require('jsonwebtoken')
const { genSalt, hash, compare } = require('bcryptjs')
const genSaltPromise = util.promisify(genSalt)
const hashPromise = util.promisify(hash)
const comparePromise = util.promisify(compare)

// @param raw password string
// returns bluefish cipher
const encrypt = async passwd => {
  const salt = await genSaltPromise(10)
  return hashPromise(passwd, salt)
}

const signUser = user => {
  const userData = {
    id             : user.id,
    user_name      : user.user_name,
    profile_pic_url: user.profile_pic_url
  }
  const token = sign(
    { id: user.id },
    process.env.PRIVATE_KEY,
    { expiresIn: 86400 }// expires in 24 hours
  )
  return { userData, token }
}

const registerUser = async (req, res) => {
  const { username, password } = req.body
  const user = new User(-1, username, password, '')
  user.password = await encrypt(user.password)
  try {
    const saveResult = await user.save()
    if (!saveResult) return res.redirect('/')
    user.id = saveResult.rows[0].id
    const { userData, token } = signUser(user)
    res.cookie('token', token)
    res.cookie('userData', userData)
    res.redirect('/dashboard')
  } catch (e) {
    // todo: set user exist session error
    console.error(e)
    res.redirect('/')
  }
}

const loginUser = (async (req, res) => {
  const { username: user_name, password } = req.body
  const [user] = await User.select('*', { user_name })
  let errors = []
  if (!user) {

    //set error session and redirect to /
    // errors: [
    //   {
    //     value: '',
    //     msg: 'Username is required.',
    //     param: 'username',
    //     location: 'body'
    //   }
    // ]
    errors.push({
      msg  : 'Credentials does not match',
      param: 'username'
    })
    res.redirect('/')
  }

  // todo: get user profile
  const userPasswd = user.password
  const isMatch = await comparePromise(password, userPasswd)

  if (!isMatch && !errors.length) {
    errors.push({
      msg  : 'Credentials does not match',
      param: 'username'
    })
  }

  req.session.errors = null
  // set token cookie
  const { userData, token } = signUser(user)

  res.cookie('token', token)
  res.cookie('userData', userData)
  res.redirect('/dashboard')

})


module.exports = {
  registerUser,
  loginUser
}