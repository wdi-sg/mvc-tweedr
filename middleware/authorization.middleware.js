const {verify} = require('jsonwebtoken')

const authorize = (req, res, next) => {
  if (!res.cookies && res.cookies.token ) {
    // bad request
    res.status(401).redirect('/')
  }
  const token = req.cookies.token;
  try {
    req.userData = verify(token, process.env.PRIVATE_KEY);
    next()
  } catch (e) {
    // forbidden
    res.status(400).redirect('/')
  }
}

module.exports = authorize
