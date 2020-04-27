
module.exports = (dbPoolInstance) => {


    let userLogin = (userName, requestPassword, callback) => {

      let getUserQuery = "SELECT * FROM users WHERE name=$1";

      const values = [userName];

      dbPoolInstance.query(getUserQuery, values, (error, result)=>{
        if( error ){
          console.log("ERRRRRRRRRROR");
          console.log(error);
        }
        console.log("YAAAYYUUUUUUUYYYYYY");
        console.log("SELECT RESULT:")
        console.log(result.rows);

        // if there is a result in the array
        if( result.rows.length > 0 ){
          // we have a match with the name
          // response.send("heeeyyyy");heeeyyyy

          if(requestPassword === result.rows[0].password){
            callback(null, result.rows)

          }else{
            callback(null, null);

          }

        }
      })

    }

  return {
    userLogin,

  }

}
