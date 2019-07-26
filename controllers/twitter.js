module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


    let loginControllerCallback = (request, response) => {
        // response.send("Inside loginControllerCallback function");
        response.render('loginpage');
    };

    let newAccountCallback = (request,response) =>{
        // response.send("inside createAccountCallback function");
        response.render('newaccountpage');
    };

    let loginCheckCallback = (request, response) =>{
        // response.send("Inside loginCheckCallback function");
        // response.send(request.body);
        // console.log(request.body);
        db.twitter.getOne(request.body,(error, result)=>{
            // console.log("Error: ", error);
            // console.log("result: ", result);
            if(error){
                console.log('error',error)
            }
            else{
                if(result === null){
                    response.send('create an account');
                }
                else{
                    response.send('Enter');
                }
            }
        });
    }

    let newAccountCheckCallback = (request,response) =>{
        // response.send("inside new account check function");
        // response.send(request.body);
        db.twitter.newOne(request.body,(error, result)=>{
            console.log('error: ', error);
            console.log('result: ', result);
            response.redirect('/login');
        })
    }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    login: loginControllerCallback,
    newAccount: newAccountCallback,
    loginCheck: loginCheckCallback,
    newAccountCheck: newAccountCheckCallback
  };

}