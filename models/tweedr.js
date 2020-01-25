module.exports = dbPoolInstance => {
  let registerUser = (username, password, callback) => {
    const values = [username, password];
    const query =
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *";
    dbPoolInstance.query(query, values, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result.rows);
      }
    });
  };

  return {
    registerUser: registerUser
  };
};
