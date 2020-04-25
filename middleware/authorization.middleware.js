const {verify} = require('jsonwebtoken')

const authorize = (req, res, next) => {
  console.log('Cookies: ', req.cookies)
  const token = req.cookies.token;
  if (!token) {
    res.status(401).redirect('/')
  }
  try {
    const decoded = verify(token, process.env.PRIVATE_KEY);
    console.log(decoded)
    req.user = decoded;
    next()
  } catch (e) {
    res.status(400).redirect('/')
  }
}

module.exports = authorize
