module.exports = (poolParameter) => {

    let loginFX=(callback)=> {
        callback(null,null);
    }

    let loggedIn2FX=(params, callback)=> {
        let query = `SELECT * FROM tweetsdb WHERE tweetsdb.userhandle=$1`
        poolParameter.query(query, params, (err, results)=> {
            callback(err, results);
        })
    }
    let loggedInFX=(params, callback)=> {
        let query = `SELECT * FROM userdb WHERE userdb.userhandle=$1 AND userdb.password=$2`
        poolParameter.query(query, params, (err, results)=> {
            callback(err, results);
        })
    }


    let registerFX=(params, callback)=> {
        let registerQuery = `INSERT INTO userdb (userhandle) VALUES ($1)`
        poolParameter.query(registerQuery,params, (err, results) => {
            callback(err, results)
        })
    }

    let displayFX=(params, callback)=>{
        let query = `SELECT * FROM tweetsdb WHERE userid=(SELECT id FROM userdb WHERE userhandle=$1) ORDER BY id DESC`
        poolParameter.query(query,params, (err, results)=> {
            callback(err, results);
        })
    }
    let display2FX=(params, callback)=>{
        let query = `SELECT * FROM tweetsdb WHERE userid=$1 ORDER BY id DESC`
        poolParameter.query(query,params, (err, results)=> {
            callback(err, results);
        })
    }
    let insertTweetsFX=(params,callback)=> {
        let query = `INSERT INTO tweetsdb (userid,userhandle,tweets) VALUES ($1,$2,$3)`
        poolParameter.query(query,params, (err, results)=> {
            callback(err, results);
        })
    }
    let displayAllFeedFX=(callback)=> {
        let query = 'SELECT * FROM tweetsdb'
        poolParameter.query(query, (err, results)=> {
            callback(err, results);
        })
    }



    return {
    displayFX,
    loginFX,
    registerFX,
    loggedInFX,
    loggedIn2FX,
    insertTweetsFX,
    display2FX,
    displayAllFeedFX
  };
};