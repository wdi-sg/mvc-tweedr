const sha256 = require('js-sha256');
const salt = 'salty';

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
    tweedShow: tweedShowControllerCallback
};
