module.exports = (db) => {


  let homeControllerCallback = (request, response) => {
    response.render('./tweedr/home');
  }

  let registerControllerCallback = (request, response) => {
    response.render('./tweedr/register')
  }

  let loginControllerCallback = (request, response) => {
    response.render('./tweedr/login')
  }

  let tweetControllerCallback = (request, response) => {
    response.render('./tweedr/tweets')
  }















  return {
    home: homeControllerCallback,
    register: registerControllerCallback,
    login: loginControllerCallback,
    tweets: tweetControllerCallback
  }
}
