module.exports = (db) => {

  let welcome = (req, res) => {
    res.render('index');
  }

  let login = (req, res) => {
    res.render('login');
  }

  let verifyInfo = (req, res) => {

    let username = req.body.username;
    let password = req.body.password;

    db.tweedr.getVerifyInfo(username, password, (err, result) => {
      if (err) {
        console.log('error at tweedr_controller, verifyInfo_cb ---', err.messsage);
      }
      else {
        if (result == 'wrong username') {
          res.send('user does not exist');
        }
        else if (result == 'wrong password') {
          res.send('incorrect password');
        }
        else {
          res.cookie('username', result.rows[0].username);
          res.cookie('user_id', result.rows[0].id);
          res.cookie('loggedIn', true);
          res.redirect(`/${result.rows[0].id}`);
        }
      }
    })
  }

  let register = (req, res) => {
    res.render('register');
  }

  let registerInfo = (req, res) => {

    let username = req.body.name;
    let password = req.body.password;

    db.tweedr.getRegisterInfo(username, password, (err, result) => {
      if (err) {
        console.log('error at tweedr_controller, registerInfo ---', err.message);
      }
      else {
        res.cookie('username', result.username);
        res.cookie('user_id', result.id);
        res.cookie('loggedIn', true);
        res.send('registration successful');
      }
    })
  }

  let userTweeds = (req, res) => {

    let id = req.cookies.user_id;

    db.tweedr.getUserTweeds(id, (err, result) => {
      if (err) {
        console.log('error at tweedr_controller, userTweeds ---', err.message);
      }
      else {
        res.render('user', result);
      }
    })
  }
  
  return {
    welcome,
    login,
    verifyInfo,
    register,
    registerInfo,
    userTweeds
  };

}
