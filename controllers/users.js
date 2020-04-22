module.exports = (db) => {
  let displayLoginPage = (request, response) => {
    response.render("./auth/login");
  };


  let displayRegistration = (request, response) => {
    response.render("./auth/register");
  };


  let submitRegistration = (request, response) => {
    // console.log(request.body);
    //Callback if all registration fields are correctly filled
    let cbRender = (err, result) => {
      console.log(result.rows);
      let obj = {
        comments: "Registration successful! Please proceed to login.",
      };
      response.render("./auth/register-success", obj);
    };

    let cbCheckUsernameAndDp = (err, result) => {
      //Check dp_url is valid 
      let dpState = db.users.checkDpUrl(request.body.dp_url);
      let usernameState = true;
      if (result.rows.length === 0 || err) {
        usernameState = false;
      }
      // console.log(usernameState);
      //Perform different actions depending on username and dp_url validity
      if (dpState && !usernameState) {
        db.users.writeNewUser(request.body, cbRender);
      } else if (usernameState) {
        let obj = {
          comments: "Username already taken. Please choose an alternative.",
        };
        response.render("./auth/register", obj);
      } else if (!dpState) {
        let obj = {
          comments: "Invalid URL entered. Please try again.",
        };
        response.render("./auth/register", obj);
      }
    };
    db.users.checkUsernameDuplicate(
      request.body.username,
      cbCheckUsernameAndDp
    );
  };

  return {
    displayLoginPage: displayLoginPage,
    displayRegistration: displayRegistration,
    submitRegistration: submitRegistration,
  };
};
