const sha256 = require('js-sha256');
const salt = 'salty';


module.exports = (db) => {
  //create new user form
  let newUserCallback = (req, res) => {
    res.render('/user/new');
  };
//submit new user into db
  let createUserCallback = (req, res) => {
    db.user.createUser(req.body, (err, result) => {
      data = {
        result: req.body
      }
      res.render('user/create', data);
    });
  };
};

return{
   newUser: newUserCallback,
   createUser:createUserCallback
};
