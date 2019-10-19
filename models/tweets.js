module.exports = (dbPoolInstance) => {

    let getAll = (req,callback) => {
        let query = 'SELECT * FROM tweets INNER JOIN users ON tweets.users_id = users.id';
        dbPoolInstance.query(query,(err,res)=>{
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