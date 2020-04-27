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
    const name = req.cookies['username'];

    //show all tweets 
    db.tweedrModels.getAll(name, (err, tweedResult, hashtagResult) => {
      if (err) {
        console.error('query error:', err.stack);
        res.send('query error');
      } else {
        const data = {'tweeds': tweedResult, 'hashtags': hashtagResult}
        res.render('index', data);
      }
    })
  }

  // register page
  const registerGetController = (req, res) => {
    if (req.cookies['login_status'] === sha256('yes_true')){
      return res.redirect('/');
    }
    res.render('register');
  }

  // login page
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

    db.tweedrModels.register(name, password, (err, tweedResult) => {
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
    const hashtag_lst = req.body.hashtag;

    db.tweedrModels.createTweed(name, tweed_content, hashtag_lst, (err, queryResult) => {
      if (err) {
        console.error('query error:', err.stack);
        res.send('query error');
      } else {
        res.redirect('/')
      }
    })
  }

  const hashtagPostController = (req, res) => {
    const name = req.cookies['username'];
    const hashtag = req.body.hashtag;

    db.tweedrModels.createHashtag(hashtag, (err, queryResult) => {
      if (err) {
        console.error('query error:', err.stack);
        res.send('query error');
      } else {
        res.redirect('/')
      }
    })
  }

  const favoritePostController = (req, res) => {
    const tweedContent = req.body.tweed;

    db.tweedrModels.insertFav(tweedContent, (err, queryResult) => {
      if (err) {
        console.error('query error:', err.stack);
        res.send('query error');
      } else if (queryResult){
        console.log(queryResult)
        res.send('TWEED IS ADDED TO FAVORITES!!!')
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
    hashtagPost: hashtagPostController,
    favoritePost: favoritePostController

  };

}
