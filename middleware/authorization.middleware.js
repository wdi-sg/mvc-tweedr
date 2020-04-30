const {verify} = require('jsonwebtoken')

const isTokenNotFound = req => !req.cookies && !(req.cookies.token)

const authorize = (req, res, next) => {
  if (isTokenNotFound(req)) res.status(401).redirect('/')
  const token = req.cookies.token;
  try {
    res.userData = verify(token, process.env.PRIVATE_KEY);
    next()
  } catch (e) {
    console.error(('auth token is not present, check cookie'))
    return res.status(400).redirect('/')
  }
}

module.exports = authorize
