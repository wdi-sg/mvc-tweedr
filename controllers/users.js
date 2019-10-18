module.exports = (db) => {
  // Controller logic
  const usersControllerCallback = (request, response) => {
    db.users.getAll((error, allUsers) => {
      response.render("users/users", {allUsers});
    });
  };

  const user = (request, response) => {
    db.users.getAll((error, allUsers) => {
      response.render("users/user", {allUsers});
    });
  };

  const newTweet = (request, response) => {
    db.users.getAll((error, allUsers) => {
      response.render("users/newTweet", {allUsers});
    });
  };

  // Export controller functions as a module
  return {
    users: usersControllerCallback,
    user,
    newTweet,
  };
};
