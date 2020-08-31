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



  return {
    getAllTweets
  };
};