
module.exports = (dbPoolInstance) => {

    let addUser = (userName, password, callback) => {

      let duplicateQueryText = "SELECT * FROM users (name) VALUES = " +userName;

      let queryText = "INSERT INTO users (name,password) VALUES ($1,$2)";

      const values = [userName, password]

      dbPoolInstance.query( queryText, values, (error, queryResult) =>{

        if(duplicateQueryText !== userName){
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

        }else{
          console.log("UserName matched")
        }
      })

    }
  return {
    addUser,

  }

}
