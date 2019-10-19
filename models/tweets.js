module.exports = (dbPoolInstance) => {

    // let getAll = (callback) => {

    //     let query = 'SELECT * FROM users';

    //     dbPoolInstance.query(query,(err,res)=>{
    //         if (err) {
    //             callback(err,null);
    //         } else {
    //             if (res.rows.length>0) {
    //                 callback(null,res.rows);
    //             } else {
    //                 callback(null,null);
    //             };
    //         };
    //     });
    // };

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

    // let verifyLogin = (req,callback) => {
    //     let values = [req.body.username,sha256(req.body.password)];
    //     let query = `SELECT * FROM users WHERE username=$1 AND password=$2`;
    //     dbPoolInstance.query(query,values,(err,res)=>{
    //         if (err) {
    //             callback(err,null);
    //         } else {
    //             if (res.rows.length>0) {
    //                 callback(null,res.rows);
    //             } else {
    //                 callback(null,null);
    //             };
    //         };
    //     });
    // };

    return {
        // getAll,
        insertNew,
        // verifyLogin
    };
};