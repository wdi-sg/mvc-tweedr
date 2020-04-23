const User = require('../models/user.model')
const util = require('util')
const {genSalt, hash} = require('bcryptjs')
const genSaltPromise = util.promisify(genSalt)
const hashPromise = util.promisify(hash)

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
  user.save().then(data=>res.send(data))
})

const loginUser = (async (req, res)=> {
  console.log('hello')
})


module.exports = {
  registerUser,
  loginUser
}