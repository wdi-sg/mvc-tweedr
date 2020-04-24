const User = require('../models/user.model')
const util = require('util')
const jtw = require('jsonwebtoken')
const {genSalt, hash, compare} = require('bcryptjs')
const genSaltPromise = util.promisify(genSalt)
const hashPromise = util.promisify(hash)
const comparePromise = util.promisify(compare)

// @param raw password string
// returns bluefish cipher
const encrypt = async passwd => {
  const salt = await genSaltPromise(10);
  return hashPromise(passwd, salt)
}

const registerUser =(async (req, res)=> {
  const {username, password} = req.body
  const user = new User(-1,username, password,"" )
  user.password = await encrypt(user.password)
  const newUserId = (await user.save()).rows[0].id
  user.id = newUserId
})

const loginUser = (async (req, res)=> {
  const {username:user_name, password} = req.body
  const where = {user_name}
  const [user] = await User.select('*', where)
  const userPasswd = user.password
  const isMatch = await comparePromise(password, userPasswd)
  if (isMatch) {
    return res.render('dashboard')
  }
  return res.send('failed')
})


module.exports = {
  registerUser,
  loginUser
}