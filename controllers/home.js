module.exports = (db) => {

    /**
    * ===========================================
    * Controller logic
    * ===========================================
    */

    let indexControllerCallback = (request, response) => {
        var username = request.cookies['username']
        let loggedIn = false
        if( request.cookies['logged in'] === 'true'){
            loggedIn = true;
        }
        db.tweedr.getAll((error, tweets) => {
            //response.send(tweets)
            data = {
                tweets:tweets,
                loggedIn:loggedIn,
                username:username
            }
            response.render('tweedr/index', data);
        });
    };
    let postRegister = (request, response) => {
        values = [request.body.name,request.body.password]
        db.tweedr.postRegister(values, (error, results) => {
            //console.log("YAAAYYYYY");
            //console.log(results)
            response.cookie('logged in', 'true');
            response.cookie('username',results[0].name)
            response.cookie('userid',results[0].id)
            response.redirect('/');
        })
    }
    let getLogin = (request, response) => {
        response.render('tweedr/login');
    };

    let postLogin = (request, response) => {
        console.log(request.body)

        let getUserQuery = "SELECT * FROM users WHERE name=$1";
        const values = [request.body.name];
        db.query(getUserQuery, values, (error, result)=>{
            if( error ){
              console.log("ERRRRRRRRRROR");
              console.log(error);
            }
            console.log("YAAAYYUUUUUUUYYYYYY");
            console.log("SELECT RESULT:")
            console.log(result.rows);

            // if there is a result in the array
            if( result.rows.length > 0 ){
              // we have a match with the name
              // response.send("heeeyyyy");heeeyyyy

                let requestPassword = request.body.password;

                if(sha256( requestPassword) === result.rows[0].password){
                    response.cookie('logged in', 'true');
                    response.cookie('username',result.rows[0].name)
                    response.cookie('userid',result.rows[0].id)
                    response.redirect('/playlist')
                }else{
                    data={
                        status: "pwwrong"
                    }
                     // nothing matched
                    response.status(403);
                    response.render('tweedr/login',data)
                }
            }else{

                data={
                        status: "userwrong"
                }
                response.status(403);
                response.render('tweedr/login',data)
            }
        })
    }
    let getRegister = (request, response) => {
        response.render('tweedr/register');
    }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    getLogin: getLogin,
    postLogin: postLogin,
    getRegister: getRegister,
    postRegister: postRegister
  };

}