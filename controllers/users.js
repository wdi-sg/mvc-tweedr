module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  // let indexControllerCallback = (request, response) => {
  //     db.pokemon.getAll((error, allPokemon) => {
  //       response.render('pokemon/index', { allPokemon });
  //     });
  // };

  let registrationForm = (req, res) => {
    res.render('users/register')
  }

  let registerUser = (req, res) => {
        const registeredUserCallback = (err, result) => {
            res.cookie('loggedin', true)
            res.cookie('username', req.body.username)
            res.cookie('user_id', userid)
            res.redirect('/')
        }
        db.users.registerUser(req.body.username, req.body.password, registeredUserCallback)
  }

  let loginForm = (req, res) => {
    res.render('users/login')
  }

  let loginUser = (req, res) => {
        const loginUserCallback = (err, result, userid) => {
            if (result) {
                res.cookie('loggedin', true)
                res.cookie('username', req.body.username)
                res.cookie('user_id', userid)
                res.redirect('/')
            } else {
                res.send("log in failed, try again?")
            }


        }
        db.users.verifyLogin(req.body.username, req.body.password, loginUserCallback)
  }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    registrationForm,
    registerUser,
    loginForm,
    loginUser
  };

}