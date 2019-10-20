module.exports = (dbPoolInstance) => {

    let getAllFollowing = (req,callback) => {
        let values = [req.cookies.userId];
        let query = 'SELECT * FROM follows WHERE f_er_users_id=$1';
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

    let addNew = (req,callback) => {
        let values = [req.params.id,req.cookies.userId];
        let query = `INSERT INTO follows (users_id,f_er_users_id) VALUES ($1,$2)`;
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
        getAllFollowing,
        addNew
    };
};