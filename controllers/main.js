module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let mainControllerCallback = (request, response) => {
      db.tweets.getAll((error, tweets) => {
        response.render('tweets', { tweets });
      });
  };

  let loginControllerCallback = (request, response) => {
      response.render('login');
  };

  let loggedinControllerCallback = (request, response) => {
    let input = request.body;
    console.log(input);

    db.users.login(input, (error, queryResult, password)  => {

      if( error ){
        console.log( "ERRR!", error );

      }else{

        console.log('queryResult');
        console.log(queryResult);

        if(input.password === queryResult[0].password){

        var user_id = queryResult[0].id;

        console.log("CORRECT")

        response.cookie('loggedin', true);
        response.cookie('user_id', user_id);
        response.redirect('/');

      } else if (input.password === !queryResult[0].password){
        response.send('wrong');
      }

      }
    });

  };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    main: mainControllerCallback,
    login: loginControllerCallback,
    loggedin: loggedinControllerCallback
  };

}
