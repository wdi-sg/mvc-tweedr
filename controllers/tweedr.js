const sha256 = require('js-sha256')
const SALT = "mr poopy butt hole"

module.exports = (db) => {



  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let registerPage = (request, response) => {
    response.render('register');
  };

  let registerUser = (req, res) => {

    const values = req.body

    db.tweedr.registerNewUser((err, result) => {
      const data = {
        success: "Successfully registered!"
      }
      res.render('login', data)
    }, values)
    //END registerUser
  }

  let loginPage = (req, res) => {
    res.render('login')
  }

  let loginUser = (req, res) => {

    const values = req.body

    db.tweedr.loginUser((err, result, tweets) => {

      if (typeof result === "object"){
        const data = {
          tweets: tweets
        }
        res.cookie("user_id", result.id)
        res.cookie("loggedIn", sha256(SALT+result.id))
        res.render('index', data)

      } else {
        res.clearCookie("user_id")
        res.clearCookie("loggedIn")
        res.send(result)
      }
    }, values)
    //END loginUser
  }

  let mainPage = (req, res) => {
    
    if (!req.cookies.loggedIn) {
      res.send('<a href="/login">Please log in!</a>')
    } else {
      db.tweedr.showTweets((err, allTweets) => {
        const data = {
          tweets: allTweets
        }

        res.render('index', data)
      })
    }
  }

  let newTweet = (req, res) => {
    const tweet = req.body.text
    const userId = req.cookies.user_id

    const tweetData = {
      tweet: tweet,
      id: userId
    }

    db.tweedr.newTweet((err, result) => {
      const data = {
        tweets: result
      }
      res.render('index', data)
    }, tweetData)

  }
  

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    registerPage: registerPage,
    registerUser: registerUser,
    loginPage: loginPage,
    loginUser: loginUser,
    mainPage: mainPage,
    newTweet: newTweet
  };

}
