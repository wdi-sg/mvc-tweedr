module.exports = (allModels) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let tweedHomeControllerCallback = (request, response) => {

      const resultCallback = (result) => {
        console.log("register controller: ");
        console.log(result);

        response.render('./tweedHome');
      };

      allModels.tweedHomeModelsObject.tweedHomeModelFunction(data, resultCallback);

  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    tweedHomeControllerCallback:tweedHomeControllerCallback
  };

}