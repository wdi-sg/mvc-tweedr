//Export model functions as a module

module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope
let validateUser = (username,password, callback) => {
    let query = 'SELECT * FROM users WHERE username=$1 AND password=$2';
    let values = [username, password];
    dbPoolInstance.query(query, values, (error, queryResult) => {
        if(error){
            callback(error,null);
        }else{
            callback(null, queryResult.rows);
        }
    });
  };
let setUser = (username,password, callback)=>{
    let addUserQuery = `INSERT INTO users(username,password) VALUES($1,$2)`
    let values = [username, password];
    dbPoolInstance.query(addUserQuery, values, (error,queryResult)=>{
        callback(error);
    });
};

let registerUser = (username, password, callback) =>{
    let query = 'SELECT * FROM users WHERE username=$1';
    let values = [username];
    dbPoolInstance.query(query,values, (error,queryResult)=>{
        if(queryResult.rows.length === 0){
            setUser(username,password,callback);
        }else{
            callback("Exist")
        }
    });
};

  return {
    validateUser,
    registerUser
  };
};