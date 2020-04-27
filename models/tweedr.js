
module.exports = (dbPoolInstance) => {

      //////Tweet messages
      let addTweet = (userMessage, callback) => {


      let queryText = "INSERT INTO tweets (message) VALUES ($1)";

      const values = [userMessage];


      dbPoolInstance.query( queryText, values, (error, queryResult) =>{

          if (error){
            console.log("ERRORR");
            console.log(error);
          }else{
            if(queryResult.rows.length > 0){
            callback(null, queryResult.rows)
            }else{
              callback(null, null);
            }
          }
         })
    }
  return {

    addTweet:addTweet,

  }

}

