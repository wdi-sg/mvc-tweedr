module.exports = (dbPoolInstance) => {

      //////Tweet messages
      let addHashtag = (userHashtag, callback) => {


      let queryText = "INSERT INTO hashtags (hashtag) VALUES ($1)";

      const values = [userHashtag];


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

    addHashtag,

  }

}
