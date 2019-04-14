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
      
      let data = {
        username: username
      };

      const getTweedCallback = (result) => {
        console.log("tweed controller getTweed result: ");
        console.log(result);
        response.render('./tweed/tweed', { object:result });
      };
      
      allModels.tweedModelsObject.getTweedModelFunction(data, getTweedCallback);

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
      console.log("tweed controller writeTweed result: ");
      console.log(result);
      response.redirect('/');
    };
    
    allModels.tweedModelsObject.writeTweedModelFunction(data, writeTweedCallback);
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
