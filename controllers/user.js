module.exports = (db) => {
    /**
    * ===========================================
    * Controller logic
    * ===========================================
    */
    const sha256 = require('js-sha256');

    let getLogin = (request, response) => {
        response.render('tweedr/login');
    };
    let postLogin = (request, response) => {
        console.log(request.body)
        const values = [request.body.name];
        db.users.postLogin(values, (error, results) => {
            console.log("controller results>>>>>>"+results)
            //console.log("YAAAYYYYY");
            //console.log(results)
            if( error ){
              console.log("ERRRRRRRRRROR");
              console.log(error);
            }
            console.log("YAAAYYUUUUUUUYYYYYY");
            console.log("SELECT RESULT:")
            console.log(results);

            // if there is a result in the array
            if( results != null ){
              // we have a match with the name
              // response.send("heeeyyyy");heeeyyyy

                let requestPassword = request.body.password;

                if(sha256(requestPassword) === results[0].password){
                // if(requestPassword === results[0].password){
                    response.cookie('logged in', 'true');
                    response.cookie('username',results[0].name)
                    response.cookie('userid',results[0].id)
                    response.redirect('/')
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
    let postRegister = (request, response) => {
        values = [request.body.name, sha256(request.body.password)]
        db.users.postRegister(values, (error, results) => {
            //console.log("YAAAYYYYY");
            //console.log(results)
            response.cookie('logged in', 'true');
            response.cookie('username',results[0].name)
            response.cookie('userid',results[0].id)
            response.redirect('/');
        })
    }

    let logout = (request, response) => {
        response.clearCookie('logged in');
        response.redirect('/')
    };

    let userPage = (request,response) => {
        let userid = request.cookies['userid']
        values = [userid]
        var username = request.cookies['username']
        let loggedIn = false
        if( request.cookies['logged in'] === 'true'){
            loggedIn = true;
        }
        db.tweedr.userTweets(values, (error, results) => {
            if(error){
                console.log("ERRRRRRRRRROR");
                console.log( error )
                response.send('error')
            }else{
                console.log(results)
                //response.send(results)
                data = {
                    results,
                    loggedIn,
                    username
                }
                //response.send (data)
                response.render('tweedr/users',data)
            }
        });
    }

    let otherUserPage = (request,response) => {
        let userid = request.params.id
        values = [userid]
        console.log(values)
        var username = request.cookies['username']
        let loggedIn = false
        if( request.cookies['logged in'] === 'true'){
            loggedIn = true;
        }

        db.tweedr.userTweets(values, (error, results) => {
            if(error){
                console.log("ERRRRRRRRRROR");
                console.log( error )
                response.send('error')
            }else{
                console.log(results)
                //response.send(results)
                data = {
                    results,
                    loggedIn,
                    username
                }
                //response.send (data)
                response.render('tweedr/otherUser',data)
            }
        });
    }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    getLogin: getLogin,
    postLogin: postLogin,
    getRegister: getRegister,
    postRegister: postRegister,
    logout: logout,
    userPage,
    otherUserPage
  };
}