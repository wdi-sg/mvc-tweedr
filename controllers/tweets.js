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
    let user_name = request.cookies.user_name;
    let { content } = request.body;

    db.tweets.addNew(user_id, content, (error, newTweet) => {
      if (error) {
        console.log("Error!", error);
      } else {
        const data = {
          newTweet: newTweet,
          message: "Added new tweet!",
          addedNewTweet: true,
          user_name: user_name
        };

        response.render("tweets/new", data);
      }
      // response.render('tweets/addNewSuccess', { newTweet });
    });
  };

  let renderNewTweetForm = (request, response) => {
    let logged_in = request.cookies.logged_in;
    console.log("request.cookies!!!!!!!!\n", request.cookies);
    console.log(
      "request.cookies.logged_in!!!!!!!!\n",
      request.cookies.logged_in
    );

    if (!logged_in) {
      response.render("users/login", { msg: "Please log in before tweeting!" });
    } else {
      response.render("tweets/new");
    }
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
