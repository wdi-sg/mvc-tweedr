module.exports = (db) => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let getHashtagFormControllerCallback = (req, res) => {
        res.render(`hashtags/new-hashtag`);
  };

  let displayAllHashtagsControllerCallback = (req,res)=> {
        db.hashtags.getAllHashtags( (err, results)=> {
            err && console.log(`Query Error`, err);

            res.render(`hashtags/all-hashtags`, {hashtags: results})
        })
  }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    getHashtagForm: getHashtagFormControllerCallback,
    displayAllHashtags: displayAllHashtagsControllerCallback,
  };
};
