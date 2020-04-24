module.exports = (db) => {

  let addFavoriteForm = (req, res) => {
    res.render('favorites')
  }

  let addFavorite = (req, res) => {
    const addFavCallback = (err, result) => {
        res.send(result)
    }
    db.favorites.addFavoriteToDatabase(req.body.user_id, req.body.tweet_id, addFavCallback)
  }
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    addFavoriteForm,
    addFavorite
  };

}