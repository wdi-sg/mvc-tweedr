
module.exports = (dbPoolInstance) => {

  let addUser = (userName, password, callback) => {

    let queryDuplicateCheck = "SELECT * FROM users";

    dbPoolInstance.query(queryDuplicateCheck, (error, res) => {
      console.log(res.rows);



        if(userName === res.rows.name || password === res.rows.password){
          console.log("User name or password exists, Try another one")
        }else{
              let queryText = "INSERT INTO users (name,password) VALUES ($1,$2)";

              const values = [userName, password]

              dbPoolInstance.query( queryText, values, (error, queryResult) =>{

                console.log(queryResult);
                if (error){
                  console.log("ERRORR");
                  console.log(error);
                  callback(error,null)
                }else{

                  if(queryResult.rows.length > 0){
                  callback(null, queryResult.rows)
                  }else{
                    callback(null, null);
                  }
                }

              })

        }
    })



  }
  return {
    addUser:addUser,

  };

}
