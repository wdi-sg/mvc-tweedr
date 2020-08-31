module.exports = (dbPoolInstance) => {

  // let storeInfo_cb = (username, password, callback) => {

  //   let text = 'INSERT INTO users (username, password) VALUES ($1, $2)';

  //   let values = [username, password];

  //   dbPoolInstance.query(text, values, (err, result) => {
  //     if (err) {
  //       console.log('error at tweedr_model, storeInfo_cb ---', err.message);
  //       callback(null,null);
  //     }
  //     else {
  //       callback(null, result);
  //     }
  //   })
  // }

  let getVerifyInfo = (username, password, callback) => {

    let text = 'SELECT * FROM users WHERE username = $1'

    let values = [username];

    dbPoolInstance.query(text, values, (err, result) => {
      if (err) {
        console.log('error at tweedr_model, verifyInfo_cb ---', err.message);
      }
      else {
        if (result.rows.length > 0) {

          let pw = result.rows[0].password;

          if (`${password}` == pw) {
            callback(null, result)
          }
          else {
            callback(null, 'wrong password');
          }
        }
        else {
          callback(null,'wrong username');
        } 
      }
    })
  }

  let getRegisterInfo = (username, password, callback) => {

    let text = 'INSERT INTO users (username, password) VALUES ($1, $2)';

    let values = [username, password];

    dbPoolInstance.query(text, values, (err, result) => {
      if (err) {
        console.log('error at tweedr_models, registerInfo_cb ---', err.message);
        callback(null,null);
      }
      else {
        callback(null, result);
      }
    })
  }

  let getUserTweeds = (id, callback) => {

    let text = 'SELECT users.username, tweets.tweet FROM users INNER JOIN tweets ON (users.id = tweets.user_id) WHERE user_id = $1'; 

    let values = [id];

    dbPoolInstance.query(text, values, (err, result) => {
      if (err) {
        console.log('error at tweedr_model', err.message);
        callback(null,null)
      }
      else {
        callback(null, result);
      }
    })
  }

  return {
    getVerifyInfo,
    getRegisterInfo,
    getUserTweeds
  };
};
