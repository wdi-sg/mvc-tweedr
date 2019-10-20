module.exports = (dbPoolInstance) => {

    let getAll = (req,callback) => {
        let values = [req.cookies.userId];
        let query = 'SELECT users.username AS username,users.id AS users_id,tweets.content FROM users INNER JOIN follows ON users.id = follows.users_id INNER JOIN tweets ON follows.users_id = tweets.users_id WHERE follows.f_er_users_id=$1 OR users.id=$1';
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
        let query = "INSERT INTO tweets (users_id,content) VALUES ($1,$2)";
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
        insertNew
    };
};