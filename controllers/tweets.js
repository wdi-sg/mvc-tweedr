module.exports = (db) => {

  //Controller logic


  /*let indexControllerCallback = (request, response) => {

      db.pokemon.getAll((error, allPokemon) => {
        response.render('pokemon/index', { allPokemon });
      });
  };*/
  let newTweets = (request,response)=>{

    response.render("tweets/newtweets");
  };
  let addTweets = (request, response) => {
     const addTweetCallback = (err, result) => {
        console.log(request.body.tweet,request.body.user_id);
         if (err) {
            console.log('error!', err);
             response.send("error");
         } else {
             response.send("added tweet")
         }
     }
     db.tweets.addTweets(request.body.tweet,request.body.user_id,addTweetCallback)
   }

    let allTweets = (request,response)=>{
        const allTweetCallback = (err, result) => {
            data = {
                tweets: result
            };
        response.render('tweets/alltweets', data);
        }
        db.tweets.allTweets(allTweetCallback);
    }





  return {
    //index: indexControllerCallback,
    newTweets:newTweets,
    addTweets:addTweets,
    allTweets:allTweets
  };

}