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

  let displayFavoriteTweets = (req, res) => {
    const displayFavTweetsCallback = (err, result) =>{
        if (req.cookies.loggedin){
            let tweetArray = []
            for (let item of result){
                tweetArray.push(item.tweet)
            }
            const data = {tweetArray};
            res.render('favorites/showfavorites', data)
        } else {
            res.redirect('/login')
        }
    }
    db.favorites.displayFavFromDatabase(req.cookies.user_id, displayFavTweetsCallback)
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