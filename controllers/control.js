module.exports = (db) => {


    let displayLoginPage = (request, response) => {
        db.poolRoutes.loginFX((err, result)=> {
            response.render('login');
        })
      }

    let loggedIn = (request, response)=> {
        let params = [
        request.body.userhandle,
        request.body.password
        ]
        db.poolRoutes.loggedInFX(params, (err, result)=> {
            let biscuit = request.cookies['userId'];
            if(result.rows.length == 0) {
                response.render('login')
            } else {
                params = [
                request.body.userhandle,
                ]
                db.poolRoutes.loggedIn2FX(params, (err,results) => {
                    response.cookie('userId', JSON.stringify(results.rows[0].userid))
                    response.render('profilePage', results)
                })
            }
        })
      }

    let register=(request, response) => {
        let params = [
        request.body.userhandle,
        ]
        console.log(params)
        db.poolRoutes.registerFX(params, (err, result) => {
            response.send("Registered");
        })
      }


    let profilePage = (request, response) => {
        let params = [
        request.params.user,
        ]
        db.poolRoutes.displayFX(params, (err, result)=>{
            response.render('profilePage', result);
        })
      };

      let insertTweets = (request, response)=> {
        // get all the information from tweetsdb
        let params = [
        request.cookies.userId,
        ]
        db.poolRoutes.display2FX(params, (err, result1)=>{
            params = [
                result1.rows[0].userid,
                result1.rows[0].userhandle,
                request.body.tweet
            ]
            console.log(params)
            db.poolRoutes.insertTweetsFX(params, (err,result2)=> {
                params = [request.cookies.userId,]
                    db.poolRoutes.display2FX(params, (err, result4)=>{
                        console.log(result4)
                    response.render('profilePage', result4);
                })
            })
        })
      }

      let displayAllFeed=(request, response)=> {
        db.poolRoutes.displayAllFeedFX((err,result)=> {
            response.render('profilePage2',result)
        })
      }
  return {
    profilePage,
    displayLoginPage,
    register,
    loggedIn,
    insertTweets,
    displayAllFeed
  };
}