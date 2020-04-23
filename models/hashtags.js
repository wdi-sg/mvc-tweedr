// Export model functions as a module
//const sha256 = require('js-sha256');
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope
console.log("entering model");
const addHashtags = ( hashword, callback) => {
    console.log(query);
     let query = 'INSERT INTO hashtags(hashword) VALUES($1)';
     let values = [hashword]
     //dbPoolInstance.query(query, values, (error, queryResult) => {
         //console.log(query);
       dbPoolInstance.query(query, values, callback);
     //})
   };
console.log("entering show");
let allHashtags = (callback)=>{
    let query = 'SELECT * FROM hashtags';
        dbPoolInstance.query(query, (error, queryResult) =>
        {
            if( error ){
                callback(error, null);
            }else{
             // invoke callback function with results after query has executed
                if( queryResult.rows.length > 0 ){

                    callback(null, queryResult.rows);

                }else{
                    callback(null, null);
                }
            }

    })
};
//let query = 'SELECT * FROM hashtags';
console.log("coming out");


   return {
    addHashtags,
    allHashtags
   };
 };