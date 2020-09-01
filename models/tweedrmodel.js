/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope
let getAllTweets = (callback) => {
    let query = 'SELECT * FROM tweets';
    dbPoolInstance.query(query,(err,result)=>{
        callback(err,result)

    })
  }

let postLogin = (values,callback) => {
    let query = 'SELECT * FROM users WHERE username=$1 and password=$2';
    dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)

    })
  }

  let postedTweed = (values,callback) => {
    let query = 'INSERT INTO tweets (post, author_id) VALUES($1,$2)';
    dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)

    })
  }

  let getUserProfile = (values,callback) => {
    let query = 'SELECT users.username, users.id, tweets.post FROM users INNER JOIN tweets on users.id =$1 and tweets.author_id =$1';
    dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)

    })
  }

  let postedSignup = (values,callback) => {
    let query = 'INSERT INTO users (username, password) VALUES($1,$2)';
    dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)

    })
  }

let postedFollowers =(values,callback) => {
let query = 'INSERT INTO followers (user_id, follower_user_id) VALUES ($1,$2)';
dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)

    })
  }

  return {
    getAllTweets,
    postLogin,
    postedTweed,
    getUserProfile,
    postedSignup,
    postedFollowers
  };
};