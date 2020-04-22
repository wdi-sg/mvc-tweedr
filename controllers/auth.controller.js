
const registerUser =(async (req, res)=> {
  const {username, password} = req.body
  res.send('hello')

})

module.exports = {
  registerUser
}