module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
    let cookieUserId = request.cookies["userID"]
      db.tweedr.getAll(cookieUserId, (error, allTweets) => {
        console.log(allTweets)
        response.render('pokemon/index', { allTweets: allTweets });
      });
  };

  let newUserForm = (request, response) => {
    response.render('newUserForm')
  }

  let newUser = (request, response) => {
    let values = [request.body.username, request.body.password]
    db.tweedr.newUser(values, (error, userAvailable)=>{
        if(error){
            response.send("error occurred.")
        } else {
            if(!userAvailable){
                response.send("username taken, try again. <a href='/users/new'>Back to new user page.</a>")
            } else {
                response.send("new user created.")
            }
        }
    })
  }

  let renderLogin = (request, response)=>{
    response.render('login')
  }

  let setLoginCookie = (request, response)=>{
    let values = [request.body.username, request.body.password]
    db.tweedr.LogInChecks(values, (err, userPassMatchID, userExists)=>{
        if(err){
            console.log(err.message)
            response.send("error occurred.")
        } else if(!userExists) {
            response.send("This username does not exist. Create new user <a href='/users/new'>here</a>.")
        } else if(!userPassMatchID) {
            response.send("Wrong password. <a href='/login'>Back to login page</a>.")
        } else if(userExists&&userPassMatchID){
            response.cookie("userID", userPassMatchID)
            response.redirect("/")
        }
    })
  }

  let allUsers = (request, response)=>{
    db.tweedr.getAllUsers((err, res)=>{
        response.render('allUsers', {allUsers: res.rows})
    })
  }

  let newTweedRender = (request, response)=>{
    let userID = request.cookies["userID"]
    let username = request.params.username
    if(!userID){
        response.send("Sign in <a href='/login'>here</a> to make a tweet!")
    } else {
        db.tweedr.getUser([userID, username], (err, res)=>{
            if(err){
                console.log(err.message)
                response.send("Error occurred.")
            }else{
                if(res.rows==0){
                    response.send("You cannot make a tweet with this username. Log out and log in with the right account.")
                } else {
                    console.log(res.rows)
                     response.render('newTweetForm', {user: res.rows})
                }

            }
        })
    }
  }

  let newTweedPost = (request, response)=>{
    let userID = request.body.userID
    let tweetText = request.body.tweet
    console.log(userID, tweetText)
    db.tweedr.postTweet([userID, tweetText], (err, res)=>{
        if(err){
            response.send("error occurred")
            console.log(err.message)
        } else {
            response.send("Tweet successful!")
        }
    })
  }

  let userProfile = (request, response)=>{
    let username = request.params.username
    db.tweedr.getUserInfo(username, (err, res)=>{
        if(err){
            console.log(err.message)
            response.send("Error occurred.")
        } else {
            if(res.rows.length > 0){
                response.render('userProfile', {userInfo: res.rows})
            } else {
                response.send("this user has no tweets yet.")
            }

        }
    })

  }

let renderFollowers = (request, response)=>{
    let username = request.params.username
    db.tweedr.getFollowers(username, (err, res)=>{
        if(err){
            console.log(err.message)
            response.send("Error occurred.")
        } else {
            console.log(res.rows)
            response.render('followers', {followersList: res.rows})
        }
    })
}

let logout = (request, response)=>{
    response.clearCookie('userID')
    response.send("Log out successful.")
}

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    newUserForm,
    newUser,
    renderLogin,
    setLoginCookie,
    allUsers,
    newTweedRender,
    newTweedPost,
    userProfile,
    renderFollowers,
    logout
  };

}