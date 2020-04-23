const sha256 = require('js-sha256');

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  //////////////////////////
  //GET request callbacks///
  //////////////////////////

  const indexGetController = (req, res) => {
    res.render('index');
  }

  const registerGetController = (req, res) => {
    if (req.cookies['login_status'] === sha256('yes_true')){
      return res.redirect('/');
    }
    res.render('register');
  }

  const loginGetController = (req, res) => {
    if (req.cookies['login_status'] === sha256('yes_true')){
      return res.redirect('/');
    }
    res.render('login');
  }

  //////////////////////////
  //POST request callbacks//
  //////////////////////////

  const registerPostController = (req, res) => {

    const name = req.body.name;
    const password = sha256(req.body.password);

    db.tweedrModels.register(name, password, (err, queryResult) => {
      if (err) {
        console.error('query error:', err.stack);
        res.send('query error');
      } else {
        if (queryResult) {
          res.cookie('username', name);
          res.cookie('login_status', sha256('yes_true'));
          res.redirect('/')
          } else {
          res.send('user already in database');
        }
      }
    })
  }

  const loginPostController = (req, res) => {
    const name = req.body.name;
    const password = sha256(req.body.password);
    db.tweedrModels.login(name, password, (err, queryResult) => {
      if (err) {
        console.error('query error:', err.stack);
        res.send('query error');
      } else {
        if (queryResult) {
          res.cookie('username', name);
          res.cookie('login_status', sha256('yes_true'));
          res.redirect('/');
        } else {
          res.send('wrong user or password');
        }
      }
    })
  }

  const createPostController = (req, res) => {
    const name = req.cookies['username'];
    const tweed_content = req.body.content;

    db.tweedrModels.createTweed(name, tweed_content, (err, queryResult) => {
      if (err) {
        console.error('query error:', err.stack);
        res.send('query error');
      } else {
        data = {'content': queryResult[0].content}
        res.render('index', data);
      }
    })
  }

  const getAllPostController = (req, res) => {
    const name = req.cookies['username'];

    db.tweedrModels.getAllTweed(name, (err, queryResult) => {
      if (err) {
        console.error('query error:', err.stack);
        res.send('query error');
      } else {
        console.log(queryResult)
        res.render('index');
      }
    })
  }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    //GET request callbacks
    indexGet: indexGetController,
    registerGet: registerGetController,
    loginGet: loginGetController,

    //POST request callbacks
    registerPost: registerPostController,
    loginPost: loginPostController,
    createPost: createPostController,
    getAllPost: getAllPostController

  };

}
