/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const SALT = 'CARROT IS BOTH FRUIT AND VEGGIE';
const sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {

  const createAccount = (data,callback)=>{
    console.log('get it done');
    const query = `INSERT INTO users (name,password, email) VALUES($1,$2,$3) RETURNING *`;
    values = [data.name, data.password, data.email];
    dbPoolInstance.query(query,values, (err,result)=>{
      console.log('do you think it will work?');// worked here
      if(err){
        callback(err, null);
      } else {
        callback(err, true);
       
      }
    });
  };


  
  const getInfo = function(data, callback) {
   
    const value =[data.name];
    
    const query = `SELECT name, password FROM users WHERE name = $1 `;
    dbPoolInstance.query(query,value,(err,result) =>{
      console.log(result.rows[0].password);
      if(err){
        callback(err,err);
      }else {
        if(result.rows.length ===1){
          callback(err, result)
        } 
      }
      
    });
  };

  const getTweet = function(username) {
    const query = `SELECT content FROM tweets WHERE user_name = $1`;
    const value = [username];
    dbPoolInstance.query(query, value , (err, result)=>{
      if(err){
        console.log('err');
      } else {
        return result.rows;
      }
    });
  }

  const getAllTweets = (callback)=>{
    console.log('let me know that you are there');
    const query =`SELECT content, user_id FROM tweets`;
    dbPoolInstance.query(query, (err,result)=>{// worked here
      if(err){
        callback(err, null);
      } else {
        if (result.rows.length > 0) {
          callback(null,result.rows);

        } else {
          callback(null, null);

        }
      }
    });
  };

  const createTweet = function (username, tweet) {
    const query =`INSERT INTO tweets (content, user_name) VALUES  ($1, $2)`;
    const values = [tweet, username];
    dbPoolInstance.query(query,values, (err, result)=>{
      if(err){
        console.log('err');
      }else {
        return result.rows;
      }
    });
  };
  

  return {
   createAccount,
   getInfo,
   getTweet,
   getAllTweets,
   createTweet
  };
};
