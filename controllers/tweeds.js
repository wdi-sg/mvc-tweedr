module.exports = (db) =>{

    let seeAllTweeds = (req, res) => {
        if (req.cookies['loggedIn']) {
            db.tweeds.getAll((err, result) => {
                res.send(result.rows)
            })
        } else {
            res.render('login')
        }
    }

    let newTweed = (req, res) => res.render('new')

    let postTweed = (req, res) => {
        let values = [req.body.tweed, req.cookies["userID"]]
        db.tweeds.addTweed(values, (err, result) => {
            res.redirect("/")
        })
    }

    return {
        seeAllTweeds,
        newTweed,
        postTweed
    }
}