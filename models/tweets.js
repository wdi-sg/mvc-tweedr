module.exports = (dbPoolInstance) => {


let getAllTweets = (callback) => {

    let query = 'SELECT * FROM tweets';

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);
        }
      }
    });
  };

  let getRegister = (username,password,callback)=>{
    let query = `INSERT INTO users (username,password) VALUES ('${username}','${password}')`
    dbPoolInstance.query(query, (err,res)=>{
      if(err){
        console.log("err in getLogin models", err.message)
      } else {
        callback(err,res)
      }
    })
  }

  let getLogin = (username,password,callback) =>{

    let query = `SELECT * FROM users where username = '${username}'`
    dbPoolInstance.query(query,(err,queryResult)=>{
      if(err){

        callback(err,null)
      } else {
        if( queryResult.rows.length<1){

          callback(err,"too short")
        } else{
          if(queryResult.rows[0].password !== `${password}`){

            callback(err,"wrong password")
          } else{callback(err,queryResult.rows[0]);}
        }
      }
    })
  }

  let getTweet = (tweet,id,username,callback) =>{
    let values = [id,username,tweet];
    let query = `INSERT INTO tweets (userid,username,tweets) VALUES ($1,$2,$3)`
    dbPoolInstance.query(query,values,(err,results)=>{
      callback(err,results)
    })
  }

  let getHome = (id,callback) =>{
    let query = `SELECT users.id, tweets.username, tweets.tweets FROM users INNER JOIN tweets ON (users.id = tweets.userid) WHERE users.id = $1`
    let values = [id]
    dbPoolInstance.query(query,values,(err,result)=>{
      callback(err,result)
    })
  }

  return {
    getAllTweets,
    getRegister,
    getLogin,
    getHome,
    getTweet
  };


}