module.exports = (allModels) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let tweed = (request, response) => {

    const username = request.cookies.username;
    if (username === undefined) {

      response.status(401).render('./unauthorised');

    } else {

      response.render('./tweed/tweed');
    
    } 
  };

  let tweedControllerCallback = (request, response) => {

    const username = request.cookies.username;

    console.log("tweedController content");
    console.log(request.body.content);
    let data = {
      username: username,
      content: request.body.content
    };

    const writeTweedCallback = (result) => {
      console.log("tweed controller: ");
      console.log(result);
      response.redirect('/');
    };
    
    allModels.tweedModelsObject.tweedModelFunction(data, writeTweedCallback);
  };



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    tweed: tweed,
    tweedControllerCallback: tweedControllerCallback
  };

}
