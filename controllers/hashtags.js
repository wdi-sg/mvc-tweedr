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

  let createHashtagControllerCallback = (req,res)=> {
        let nameInput = req.body.hashtagName;
      db.hashtags.createHashtag(nameInput, (err, result)=> {
            err && console.log(`Query error`, err)
            res.redirect(`/hashtags`);
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
    createHashtag: createHashtagControllerCallback
  };
};
