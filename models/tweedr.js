/*===========================================
 Export model functions as a module
 ===========================================*/

module.exports = dbPoolInstance => {

// REGISTER USER
  let register = (name, password, callback) => {
    const values = [name, password];
    const query =
      "INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *";
    dbPoolInstance.query(query, values, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result.rows);
      }
    });
  };

// USER LOGIN
  let login = (name, password, callback) => {
    const values = [name, password];
    const query =
      "INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *";
    dbPoolInstance.query(query, values, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result.rows);
      }
    });
  };

// CREATE A NEW MESSAGE
/*  let createMessage = (message, user_id, callback) => {
    const values = [message, user_id];
    const query =
      "INSERT INTO tweets (message, user_id) VALUES ($1, $2) RETURNING *";
    dbPoolInstance.query(query, values, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result.rows);
      }
    });
  };*/




  return {
    register: register,
    login: login
/*    createMessage: createMessage*/
  };
};
