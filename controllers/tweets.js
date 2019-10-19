module.exports = db => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let showAllTweets = (request, response) => {
    db.tweets.getAll((error, allTweets) => {
      response.render("tweets/all", { allTweets });
    });
  };

  let addNewTweet = (request, response) => {

    let user_id = request.cookies.user_id;
    let { content } = request.body;

    db.tweets.addNew(user_id, content, (error, newTweet) => {
      if (error) {
        console.log("Error!", error);
      } else {
        response.send("added new tweet!!!");
      }
      // response.render('tweets/addNewSuccess', { newTweet });
    });
  };

  let renderNewTweetForm = (request, response) => {
    response.render("tweets/new");
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    showAllTweets: showAllTweets,
    renderNewTweetForm: renderNewTweetForm,
    addNewTweet: addNewTweet
  };
};
