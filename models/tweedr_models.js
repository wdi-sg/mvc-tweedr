/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

// model functions to do SQL queries
  const registerModel = (name, password, callbackFunc) => {
    const query = 'INSERT INTO users (name, password)' +
      'SELECT $1, $2 WHERE NOT EXISTS (SELECT 1 FROM users WHERE name=$1) ' +
      'RETURNING *;';
    const values = [name, password];

    dbPoolInstance.query(query, values, (err, result) => {
      if (err) {
        callbackFunc(err, null);
      } else {
        if (result.rows.length > 0){
          callbackFunc(null, result.rows);
        } else {
          callbackFunc(null, null);
        }
      }

    })   
  }

  const loginModel = (name, password, callbackFunc) => {
    const query = 'SELECT 1 FROM users WHERE name=$1 AND password=$2;';
    const values = [name, password];

    dbPoolInstance.query(query, values, (err, result) => {
      if (err) {
        callbackFunc(err, null);
      } else {
        if (result.rows.length > 0){
          callbackFunc(null, result.rows);
        } else {
          callbackFunc(null, null);
        }
      }
    })   
  }

  const getAllModel = (name, callbackFunc) => {
    const first_query = 'SELECT content FROM tweeds INNER JOIN users ' +
      'ON tweeds.user_id = users.id WHERE users.name = $1;'
    const first_values = [name];

    dbPoolInstance.query(first_query, first_values, (err, first_result) => {
      if (err) {
        callbackFunc(err, null, null);
      } else {
        if (first_result.rows.length > 0){
          const second_query = 'SELECT * FROM hashtags;'

          dbPoolInstance.query(second_query, (err, second_result) => {
            if (err) {
              callbackFunc(err, first_result, null);
            } else if (second_result.rows.length > 0){
              callbackFunc(null, first_result.rows, second_result.rows)
            } else {
              callbackFunc(null, null, null)
            }
          })
        }
      }
    })   
  }

  const createTweedModel = (name, content, hashtag_lst, callbackFunc) => {
    const query = 'INSERT INTO tweeds (content, user_id, hashtag_id) ' +
      'SELECT $2, users.id FROM users WHERE users.name =$1 RETURNING content;'
    let hashtags_added = 0;

    hashtag_lst.forEach(hashtag => {
      const values = [name, content, hashtag];
      dbPoolInstance.query(query, values, (err, result) => {
        hashtags_added += 1;
        if (err) {
          callbackFunc(err, null);
          } else {
            if (hashtags_added === hashtag_lst.length && result.rows.length > 0 ){
              callbackFunc(null, result.rows);
            } else {
              callbackFunc(null, null);
            }
        }
      }) 
    })
  }

  const createHashtagModel = (hashtag, callbackFunc) => {
    const query = 'INSERT INTO hashtags (hashtag) VALUES ($1);'
    const values = [hashtag];

    dbPoolInstance.query(query, values, (err, result) => {
      if (err) {
        callbackFunc(err, null);
      } else {
        if (result.rows.length > 0){
          callbackFunc(null, result.rows);
        } else {
          callbackFunc(null, null);
        }
      }
    })
  }

  const insertFavModel = (tweedContent, callbackFunc) => {
    const query = 'INSERT INTO favorites (user_id, tweed_id) SELECT user_id, tweeds.id FROM users '+
      'INNER JOIN tweeds ON (users.id = tweeds.user_id) WHERE tweeds.content = $1 RETURNING *;'
    const values = [tweedContent];

      dbPoolInstance.query(query, values, (err, result) => {
    if (err) {
      callbackFunc(err, null);
    } else {
      if (result.rows.length > 0){
        callbackFunc(null, result.rows);
      } else {
        callbackFunc(null, null);
      }
    }
  })
}

  return {
    register: registerModel,
    login: loginModel,
    createTweed: createTweedModel,
    getAll: getAllModel,
    createHashtag: createHashtagModel,
    insertFav: insertFavModel

  };
};
