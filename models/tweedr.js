/*===========================================
 Export model functions as a module
 ===========================================*/



// LOGIN
module.exports = dbPoolInstance => {
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

  return {
    login: login
  };
};






// REGISTER
/*module.exports = dbPoolInstance => {
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

  return {
    register: register
  };
};*/

