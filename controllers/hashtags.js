module.exports = (db) => {
    const sha256 = require('js-sha256');
const SALT = "my-cookie";
let newHashtags = (request,response)=>{
    response.render('hashtags/newhashtags');
  };
console.log("entering control");
const addHashtags = (request,response)=>{
    const addHashwordCallback = (err, result) => {
        console.log(request.body.hashword);
         if (err) {
            console.log('error!', err);
             response.send("error");
         } else {
             response.send("added hashtag")
         }
    }
     db.hashtags.addHashtags(request.body.hashword,addHashwordCallback)

};
let allHashtags = (request,response)=>{
        const allHashwordCallback = (err, result) => {
            data = {
                hashtags: result
            };
        response.render('hashtags/allhashtags', data);
        }
        db.hashtags.allHashtags(allHashwordCallback);
    }


  return {
    //index: indexControllerCallback,
    newHashtags: newHashtags,
    addHashtags: addHashtags,
    allHashtags: allHashtags
  };
}