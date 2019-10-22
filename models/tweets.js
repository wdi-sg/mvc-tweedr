module.exports = (dbPoolInstance) => {

    let getAll = (req,callback) => {
        let values = [req.cookies.userId];
        let query = 'SELECT DISTINCT tweets.content, users.username, tweets.users_id, timestamp FROM users INNER JOIN tweets ON (users.id = tweets.users_id) INNER JOIN follows ON (tweets.users_id = follows.users_id) WHERE follows.f_er_users_id =$1 OR tweets.users_id=$1 ORDER BY timestamp';
        dbPoolInstance.query(query,values,(err,res)=>{
            if (err) {
                callback(err,null);
            } else {
                if (res.rows.length>0) {
                    callback(null,res.rows);
                } else {
                    callback(null,null);
                };
            };
        });
    };

    let insertNew = (req,callback) => {
        let values = [req.cookies.userId,req.body.content]
        let query = "INSERT INTO tweets (users_id,content,timestamp) VALUES ($1,$2,'now')";
        dbPoolInstance.query(query,values,(err,res)=>{
            if (err) {
                callback(err,null);
            } else {
                if (res.rows.length>0) {
                    callback(null,res.rows);
                } else {
                    callback(null,null);
                };
            };
        });
    };

    let showFollowersTweets = (req,callback) => {
        let values = [req.cookies.userId];
        let query = `SELECT DISTINCT tweets.content, users.username, tweets.users_id, timestamp FROM users INNER JOIN tweets ON (users.id = tweets.users_id) INNER JOIN follows ON (tweets.users_id = follows.f_er_users_id) WHERE follows.users_id =$1 ORDER BY timestamp`;
        dbPoolInstance.query(query,values,(err,res)=>{
            if (err) {
                callback(err,null);
            } else {
                if (res.rows.length>0) {
                    callback(null,res.rows);
                } else {
                    callback(null,null);
                };
            };
        });
    };

    return {
        getAll,
        insertNew,
        showFollowersTweets
    };
};