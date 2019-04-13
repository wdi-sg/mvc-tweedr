module.exports = (allModels) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
    console.log(request.body)

    const data = {
        pic: request.body.pic,
        name: request.body.name,
        message: request.body.message,
        attachment: request.body.photo_attached,
        timestamp: request.body.created_at
    }

    const doneWithQuery = (data) => {
        // console.log(data)
        // response.send(data)
        response.render('tweedr', {tweets:data});
    };

    allModels.tweedr.view(data, doneWithQuery);
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
  };

}
