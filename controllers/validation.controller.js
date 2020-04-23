const {validationResult} = require('express-validator')


const validateAuth = validations => {
  return async (req, res, next) => {
     await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      req.session.sucess = true;
      return next();
    }
    // res.status(422).json({ errors: errors.array() });
    req.session.errors = errors;
    req.session.success= false;
    res.redirect('/')
  };
};


module.exports = {
  validateAuth: validateAuth
}