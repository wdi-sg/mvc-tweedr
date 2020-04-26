module.exports = (db) => {
    /**
    * ===========================================
    * Controller logic
    * ===========================================
    **/

    let indexControllerCallback = (request, response) => {
        var username = request.cookies['username']
        let loggedIn = false
        if( request.cookies['logged in'] === 'true'){
            loggedIn = true;
        }
        db.tweedr.getAllTweets((error, tweets) => {
            //response.send(tweets)
            data = {
                tweets,
                loggedIn,
                username
            }
            //console.log("data>>>>>>>"+data)
            response.render('tweedr/index', data);
        });
    };

    let postNewTweet = (request, response) => {

        let userid = parseInt(request.cookies['userid'])
        let content = (request.body.content);
        let n1 = content.indexOf("#");
        let n2 = content.indexOf(" ", n1);
        let hash;
        if(n1 >= 0 && n2 > 0) {
            hash = content.substr(n1, n2-n1);
            console.log("newHash ="+hash)
        }
        if(n1 >=0 && n2 < 0 ) {
            hash = content.substr(n1, content.length-n1)
            console.log("newHash = "+hash)
        }
        values = [hash]

        let hashid=0;
        db.hash.hashingTweet(values,(error, results) => {
            hashid = results.id;

            db.hash.postNewTweetHash(values, (error, results) => {
                console.log("====results====")
                values = [request.body.content, userid, hashid]
                console.log("valuesssss=====")
                console.log(values)

                db.tweedr.postNewTweet(values, (error, results) => {
                    response.redirect('/');
                });
            });
        });
    };

    let deleteTweet = (request, response) => {
        //let userid = request.params.id
        values = [request.params.id]
        console.log(request.params.id)
        db.tweedr.deleteTweet(values, (error, results) => {
        //     console.log("data>>>>>>>"+results.rows)
             response.redirect('/');
        });
    };

    let likeTweet = (request, response) => {
        //let userid = request.params.id
        let userid = request.cookies['userid']
        values = [request.body.tweetid, userid]
        db.likes.likesTweet(values, (error, results) => {
            if( error ){
              console.log("ERRRRRRRRRROR");
              console.log( error )
              response.send('error')
            }else{
              response.send('worked')
            }
        });
    };

    let hashTweet = (request,response) => {
        values = [request.body.hash]
        db.hash.hashingTweet(values, (error, results) => {
            if( error ){
              console.log("ERRRRRRRRRROR");
              console.log( error )
              response.send('error')
            }else{
              response.send('worked')
            }
        });
    }

    let selectedHashTweet = (request,response) => {
        console.log(request.body.text)
        let values = [request.body.text]
        db.hash.hashID(values, (error, results) => {
            if( error ){
                console.log("ERRRRRRRRRROR");
                console.log( error )
                response.send('error')
            }else{
                //response.send('worked')
                let values = [results[0].id]
                db.hash.hashUser(values, (error, results2) => {
                    if( error ){
                        console.log("ERRRRRRRRRROR");
                        console.log( error )
                        response.send('error')
                    }else{
                        data = {
                            results2
                        }
                        response.render('tweedr/hashtags',data)
                    }
                });
                //response.send(data.results[0])

            }
        });
    }
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    postNewTweet,
    deleteTweet,
    likeTweet,
    hashTweet,
    selectedHashTweet
  };

}