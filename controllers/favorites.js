module.exports = (db) => {
    const sha256 = require('js-sha256');
const SALT = "my-cookie";
let newFavorites = (request,response)=>{
    response.render('favorites/newfavorite');
};
console.log("entering control");

let addFavorites = (request,response)=>{
    const user_id = request.body.user_id;
     const tweet_id = request.body.tweet_id;
    const addfavoriteCallback = (err, result) => {
        //console.log(request.body.hashword);
         if (err) {
            console.log('error!', err);
            response.send("error");
         } else {
             response.send("added favorite")
         }
    }

    console.log("in controllr")
    //console.log(db.hashtags);
    console.log(db.favorites.addfavorites);
     db.favorites.addFavorites(user_id, tweet_id,addfavoriteCallback);
};


  return {
    //index: indexControllerCallback,
    newFavorites: newFavorites,
    addFavorites:addFavorites

  };
}