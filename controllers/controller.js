module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let homepage = (request, response) => {
      db.object.home(request.cookies,(error, info) => {
        var dataSet = {
          data:info,
          cookies:request.cookies
        }
        response.render('homepage',dataSet);
      });
  };

  let getAllTweets = (request, response) => {
      db.object.getTweets((error, info) => {
        var dataSet = {
          data:info,
          cookies:request.cookies
        }
        response.render('alltweets', dataSet);
      });
  };

  let login = (request, response) => {
    response.render('login');
  };

  let register = (request, response) => {
    response.render('register');
  };


  let tweedr = (request, response) => {
    if (!request.body.status){
      var createUser = request.body
      db.object.newUser(createUser,(error, info) => {
        var dataSet = {
          data:info,
        }
        console.log(info)
        if (info){
          response.cookie('username',info.name)
          response.cookie('password',info.password)
          response.cookie('id',info.id)
          response.redirect('/index');
        }else{
          response.redirect('/duplicate');
        }
      })
    }else if (request.body.status){
      var verifyUser = request.body
      db.object.login(verifyUser,(error, info) => {
        if (info){
          response.cookie('username',info.name)
          response.cookie('password',info.password)
          response.cookie('id',info.id)
          response.redirect('/index');
        }else{
          response.send('Incorrect login details!!');
        }
      })
    }
  };

  let sendtweed = (request, response)=>{
    var dataSet ={
      cookies: request.cookies,
      tweed: request.body
    }
    db.object.sendTweed(dataSet,(err,info)=>{
      response.redirect('/index')
    })
  }


  let follow = (request,response)=>{
    var dataSet = {
      username: request.cookies,
      follow: request.body
    }
    db.object.follow(dataSet,(err,info)=>{
      response.redirect('/index')
    })
  }

  let users = (request,response)=>{
    request.params.id
    db.object.users(request.params.id,(err,info)=>{
      var dataSet = {
        data: info
      }
      response.render('userpage',dataSet)
    })
  }

  let tweet = (request, response)=>{
    db.object.tweet(request.params.id,(err,info)=>{
      var dataSet = {
        data:info
      }
      response.render('singletweet',dataSet)
    })
  }
  let duplicate = (request,response)=>{
    response.render('duplicate')
  }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    alltweets: getAllTweets,
    login: login,
    register: register,
    tweedr: tweedr,
    homepage: homepage,
    sendtweed: sendtweed,
    follow: follow,
    users: users,
    tweet:tweet,
    duplicate:duplicate,
  };

}
