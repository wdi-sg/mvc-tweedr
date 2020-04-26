module.exports = (db) => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  const addFaveControllerCallback = (req, res) => {


    console.log(req.body);
      const userId = req.body.user_id
      const tweetId = req.body.tweet_id;

      db.faves.addFave(userId, tweetId, (err, result)=> {
            err && console.log(`Query error when adding tweet`, err);
            console.log(`Result in controller`, result)
            res.send(result);
      })

  }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    addFave: addFaveControllerCallback
  };
};
