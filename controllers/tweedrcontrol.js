
module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

let loginCookie;

  let allTweets = (request,response)=>{
      db.tweedr.getAllTweets((err,result)=>{
        if(err){
            response.send('Error at getAllTweets')
        } else{
            let data =result.rows;
            let obj = {data:data};
            // console.log(obj)

            response.render('tweedr/index',obj)
        }
        })
  }

  let logIn = (request, response) => {
  // send response with some data (a string)
    response.render('tweedr/login')

};

let postLogIn = (request, response) => {
    let values = [request.body.username,request.body.password];
    db.tweedr.postLogin(values,(err,result) =>{
        if(err){
            console.log('Error at postLogin---', err.message)
        } else {
            let userInfo = result.rows[0];
            let sessionid = userInfo.id;
            let userName = userInfo.username;
            let loginCookie = response.cookie("session",sessionid, { maxAge: 900000});
            let userCookie = response.cookie("userInfo",userName, { maxAge: 900000});
            response.send("Welcome "+ userName+ '<a href ="/write"> Write your tweed</a>')
        }
    })
}
  let writeTweed = (request,response)=>{
            if(loginCookie=== null) {
            response.render('tweedr/login')
          } else {
            let userName = request.cookies['userInfo'];
            let author_id = request.cookies['session'];
            let obj = {username:userName, author_id:author_id}

            response.render('tweedr/write',obj)

          }
        }

let postTweed = (request,response) => {
    let userName = request.cookies['userInfo'];
    let author_id = request.cookies['session'];
    console.log(author_id);
    let tweed = request.body.tweed;

let values = [tweed,author_id];
console.log(values)
    db.tweedr.postedTweed(values,(err,result)=>{
        if(err){
            console.log('Error at postTweed---', err.message)
        } else{

            response.send("Success "+ userName+ '<a href ="/"> Back to Timeline?</a>')
        }
        })

}

let getProfile =(request,response)=> {
    let values = [request.params.id];
    db.tweedr.getUserProfile(values,(err,result)=>{
        if(err){
            console.log('Error at getProfile---', err.message)
        } else{
            let data = result.rows;
            let obj = {data:data};
            response.render('tweedr/profile',obj)
        }
        })

}
let getRegister =(request,response) =>{
    response.render('tweedr/register')

}

let postSignup = (request,response) =>{
    let values = [request.body.username,request.body.password];
    db.tweedr.postedSignup(values,(err,result)=>{
        if(err){
            console.log('Error at getRegistered---', err.message)
        } else{
            response.send('Success! <a href ="/login"> Login Now?</a>')
        }
        })
}

let postFollowers = (request,response) =>{
    let follower_id = request.cookies['session'];

    let values = [request.params.id,follower_id];
    db.tweedr.postedFollowers(values,(err,result)=>{
        if(err){
            console.log('Error at postFollowers---', err.message)
        } else{
            response.send('Successfully followed! <a href ="/"> Back to home?</a>')
        }
        })
}





  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    allTweets,
    writeTweed,
    logIn,
    postLogIn,
    postTweed,
    getProfile,
    getRegister,
    postSignup,
    postFollowers

  };

}