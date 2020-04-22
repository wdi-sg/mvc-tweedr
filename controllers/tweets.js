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

  let tweetForm = (req, res) => {
    res.render('tweets/addtweet')
  }

  let addTweet = (req, res) => {
    const addTweetCallback = (err, result) => {
        if (req.cookies.loggedin) {
            res.redirect('/')
        } else {
            res.send("you need to login first bro")
        }
    }
    db.tweets.Tweet(req.body.tweet, req.cookies.user_id, addTweetCallback)
  }

  let displayTweets = (req, res) => {
    const displayTweetsCallback = (err, result) => {
        if (req.cookies.loggedin){
            let tweetArray = []
            for (let item of result){
                tweetArray.push(item.tweet)
            }
            let username = result[0].username
            const data = {tweetArray, username};
            res.render('index', data)
        } else {
            res.redirect('/login')
        }
    }
    db.tweets.displayTweets(req.cookies.user_id, displayTweetsCallback)
  }
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    tweetForm,
    addTweet,
    displayTweets
  };

}