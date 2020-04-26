module.exports = (db) => {

  let addFavoriteForm = (req, res) => {
    res.render('favorites/favorites')
  }

  let addFavorite = (req, res) => {
    const addFavCallback = (err, result) => {
        res.send(result)
    }
    db.favorites.addFavoriteToDatabase(req.body.user_id, req.body.tweet_id, addFavCallback)
  }

  let displayFavoriteTweets = async (req, res) => {
    try {
        let tweetArray = await db.favorites.displayFavFromDatabase(req.cookies.user_id)
        console.log(tweetArray)
        let newTweetArray = tweetArray.map(tweet => tweet.tweet)
        if (req.cookies.loggedin){
            const data = {newTweetArray};
            res.render('favorites/showfavorites', data)
        } else {
            res.redirect('/login')
        }
    } catch (err) {
        console.log(err)
    }
  }
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    addFavoriteForm,
    addFavorite,
    displayFavoriteTweets
  };

}