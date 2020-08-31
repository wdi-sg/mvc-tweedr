module.exports = (db) => {
    
    let userPage = (req, res) => {
        let user = req.params.user;

        db.tweeds.userHomepage(user, (err, result) => {
            if (err) {
                console.log("-- Error in userHomepage controller", err.message)
            } else {
                if (req.cookies.loggedIn === "true" && req.cookies.username === user) {
                    res.render('tweeds/user_homepage', result)
                } else {
                    res.send("PLEASE LOG IN")
                }
            }
        })
    }

    return {
        userPage
    }
};