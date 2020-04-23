module.exports = (db) => {
  let showAllTweetsControllerCallback = (request, response) => {
    db.tweets.showAll((error, allTweets) => {
      const data = {
        allTweets,
      };
      console.log(allTweets);
      response.render("tweets/showalltweets", data);
    });
  };

  return {
    index: showAllTweetsControllerCallback,
  };
};
