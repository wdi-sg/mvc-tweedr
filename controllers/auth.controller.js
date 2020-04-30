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

  return sign(
    userData,
    process.env.PRIVATE_KEY,
    { expiresIn: 86400 }// expires in 24 hours
  )
}

const registerUser = async (req, res) => {
  const { username:user_name, password } = req.body
  const user = new User(-1, user_name, password, '')

  let errors = []

  user.password = await encrypt(user.password)
  try {
    const dbExecResult = await user.save()
    if (!dbExecResult) return res.redirect('/')
    user.id = dbExecResult.rows[0].id
    const token = signUser(user)
    res.cookie('token', token,{sameSite:true})
    res.redirect('/dashboard')
  } catch (e) {
    // todo: set user exist session error
    console.error(e)
    res.redirect('/')
  }
}

const loginUser = (async (req, res) => {
  const { username: user_name, password } = req.body
  const [userRow] = await User.select('*', { user_name })
  let errors = []
  /*
    Error format:
       errors: [
    //   {
    //     value: '',
    //     msg: 'Username is required.',
    //     param: 'username',
    //     location: 'body'
    //   }
    // ]
   */
  if (!userRow) {
    errors.push({
      msg  : 'Credentials does not match',
      param: 'username'
    })

    return res.redirect('/')
  }
  // todo: get user profile
  const userPasswd = userRow.password
  const isMatch = await comparePromise(password, userPasswd)

  if (!isMatch && !errors.length) {
    errors.push({
      msg  : 'Credentials does not match',
      param: 'username'
    })
  }

  const  token = signUser(userRow)
  res.cookie('token', token)
  res.redirect('/dashboard')
})


module.exports = {
  registerUser,
  loginUser
}