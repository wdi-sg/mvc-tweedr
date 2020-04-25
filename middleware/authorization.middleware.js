const {verify} = require('jsonwebtoken')

const authorize = (req, res, next) => {

  if (!req.cookies && !(req.cookies.token)) {
    // token not found
    res.status(401).redirect('/')
  }
  const token = req.cookies.token;

  try {
    res.userData = verify(token, process.env.PRIVATE_KEY);
    next()
  } catch (e) {
    res.status(400).redirect('/')
  }
}

module.exports = authorize
