module.exports = (db) =>{

    let userCheck = (req, res) => {
        let values = [req.body['username'], req.body['password']];
        db.users.authenticateUser(values, (err, result) => {
            if (err) {
                res.send(err.stack)
            } else {
                if (result) {
                    res.cookie('loggedIn', true)
                    res.send("Logged in successfully")
                } else {
                    res.send("Invalid username or password")
                }
            }
        })
    }

    return {
        userCheck
    }
}