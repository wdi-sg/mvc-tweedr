module.exports = (dbPoolInstance) => {
    console.log("users models accessed");

    let authenticateUser = (values, callback) => {
        dbPoolInstance.query("SELECT * FROM users WHERE username = $1 AND password = $2;", values, (err, result) =>{
            if (err) {
                callback(err, null)
            } else {
                if (result.rowCount > 0) {
                    callback(null, true)
                } else {
                    callback(null, null)
                }
            }
        })
    }
    return {
        authenticateUser
    }
}