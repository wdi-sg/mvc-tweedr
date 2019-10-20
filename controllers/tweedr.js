const sha256 = require('js-sha256');
const salt = 'tweedrsalt';

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.tweedr.tweedIndex(req.cookies.user_id, (err, result) => {
        if (result != null) {
        data = {
          result: result
        }
        res.render('tweedr/index', data);
        } else {
        res.redirect('tweedr/new');
        }
      });
    } else {
      res.redirect('/login');
    }
  };

  let tweedNewControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      res.render('tweedr/new');
    } else {
      res.redirect('/login');
    }
  };

  let tweedCreateControllerCallback= (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.tweedr.tweedCreate(req.body, req.cookies.user_id, (err, result) => {
        data = {
          result: result
        }
        res.render('tweedr/create', data);
      });
    } else {
      res.redirect('/login');
    }
  };

  let tweedShowControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.tweedr.tweedShow(req.params.id, (err, result) => {
        data = {
          result: result
        }
        res.render('tweedr/show', data);
      });
    } else {
      res.redirect('/login');
    }
  };

  let tweedDeleteControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.tweedr.tweedDelete(req.params.id, (err, result) => {
        res.render('tweedr/delete');
      });
    } else {
      res.redirect('/login');
    }
  };

  let tweedEditControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.tweedr.tweedEdit(req.params.id, (err, result) => {
        data = {
          id: req.params.id,
          result : result
        };
        res.render('tweedr/edit', data);
      });
    } else {
      res.redirect('/login');
    }
  };

  let tweedUpdateControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.tweedr.tweedUpdate(req.body.message, req.params.id, (err, result) => {
        data = {
          id: req.params.id,
          result : result
        };
        res.render('tweedr/update', data);
      });
    } else {
      res.redirect('/login');
    }
  };



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    tweedNew: tweedNewControllerCallback,
    tweedCreate: tweedCreateControllerCallback,
    tweedShow: tweedShowControllerCallback,
    tweedDelete: tweedDeleteControllerCallback,
    tweedEdit: tweedEditControllerCallback,
    tweedUpdate: tweedUpdateControllerCallback
  };

}
