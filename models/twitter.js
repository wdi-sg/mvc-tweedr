/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback) => {

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

  let getRegister = (name,pw,callback)=>{
    console.log(name)
    let query = `INSERT INTO users (username,pw) VALUES ('${name}','${pw}')`
    dbPoolInstance.query(query, (err,res)=>{
      if(err){
        console.log("err in getLogin models", err.message)
      } else {
        callback(err,res)
      }
    })
  }

  let getLogin = (name,pw,callback) =>{
    console.log(pw)
    let query = `SELECT * FROM users where username = '${name}'`
    dbPoolInstance.query(query,(err,queryResult)=>{
      if(err){
        console.log('test')
        callback(err,null)
      } else {
        if( queryResult.rows.length<1){
          console.log('hello1')
          callback(err,"KEY IN SOMETHING THAT WORKS RETARD")
        } else{
          if(queryResult.rows[0].pw !== `${pw}`){
            console.log('hello')
            callback(err,"ERROR YOUR FACE")
          } else{callback(err,queryResult.rows[0]);}
        }
      }
    })
  }

  let getTweet = (tweet,id,callback) =>{
    let query = `INSERT INTO tweets (tweets,user_id) VALUES ($1,$2)`
    values = [tweet,id]
    dbPoolInstance.query(query,values,(err,results)=>{
      callback(err,results)
    })
  }

  let getHome = (id,callback) =>{
    let query = `SELECT users.id, tweets.tweets FROM users INNER JOIN tweets ON (users.id = tweets.user_id) WHERE users.id = $1`
    values = [id]
    dbPoolInstance.query(query,values,(err,result)=>{
      callback(err,result)
    })
  }

  return {
    getAll,
    getRegister,
    getLogin,
    getHome,
    getTweet
  };
};
