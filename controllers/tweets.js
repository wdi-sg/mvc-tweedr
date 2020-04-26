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


  let addTweet = (req, res) => {
    const addTweetCallback = (err, result) => {
        res.redirect('/')
    }
    db.tweets.Tweet(req.body.tweet, req.cookies.user_id, req.body.hashtagid, addTweetCallback)
  }

  let displayTweetsAndHashtags = (req, res) => {
    const displayCallback = (err, tweetresult, hashtagresult) => {
        if (req.cookies.loggedin){
            let tweetArray = []
            for (let item of tweetresult){
                tweetArray.push(item.tweet)
            }
            let username = tweetresult[0].username
            let hashtagArray = []
            for (let item of hashtagresult){
                hashtagArray.push(item)
            }
            const data = {tweetArray, username, hashtagArray};
            res.render('index', data)
        } else {
            res.redirect('/login')
        }
    }
    db.tweets.displayTweetsAndHashtags(req.cookies.user_id, displayCallback)
  }

  let addHashtag = (req, res) => {
    const addHashtagCallback = (err, result) => {
        res.redirect('/')
    }
    db.tweets.addHashtag(req.body.hashtag, addHashtagCallback)
  }
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    addTweet,
    displayTweetsAndHashtags,
    addHashtag
  };

}