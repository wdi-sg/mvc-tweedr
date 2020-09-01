module.exports = (db) =>{

    let userCheck = (req, res) => {
        let values = [req.body['username'], req.body['password']];
        db.users.authenticateUser(values, (err, result) => {
            if (err) {
                res.send(err.stack)
            } else {
                if (result) {
                    res.cookie('loggedIn', true)
                    res.cookie('userID', result.rows[0]["id"])
                    res.redirect("/")
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