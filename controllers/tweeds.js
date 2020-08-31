module.exports = (db) =>{
    console.log("tweeds controllers accessed")
    let seeAllTweeds = (req, res) => {
        if (req.cookies['loggedIn']) {
            res.send("you are logged in")
        } else {
            res.render('login')
        }
    }
    return {
        seeAllTweeds
    }
}