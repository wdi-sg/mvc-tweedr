module.exports = (db) => {
  // Controller logic
  const usersControllerCallback = (request, response) => {
    db.users.getAll((error, tweets) => {
      response.render("users/users", {tweets});
    });
  };

  const user = (request, response) => {
    db.users.getAll((error, allUsers) => {
      response.render("users/user", {allUsers});
    });
  };

  const newTweet = (request, response) => {
    const user_id = request.cookies["user_id"];
    const {message} = request.body;
    const data = {message, user_id};
    db.users.postTweet(data, (error, result) => {
      response.redirect("/users");
    });
  };

  // Export controller functions as a module
  return {
    users: usersControllerCallback,
    user,
    newTweet,
  };
};
