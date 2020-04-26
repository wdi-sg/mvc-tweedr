module.exports = (db) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let tweedPage = (req, res) => {
        res.render("tweeds");
    };

    let makeTweed = (req, res) => {
        let id = req.cookies["user_id"];

        db.makeTweed.insertTweed(req.body, id, (error, result) => {
            if (error) {
                console.log("ERRRRROROROROROROR");
                console.log(error);
                return;
            }
            res.redirect("tweeds");
        });
    };

    let displayTweed = (req, res) => {
        db.makeTweed.displayTweed((error, result) => {
            if (error) {
                console.log("ERRRRROROROROROROR");
                console.log(error);
                return;
            } else {
                let userName = req.cookies["user_name"];

                const data = {
                    userName,
                    result,
                };
                res.render("tweeds", data);
            }
        });
    };

    let favoritedTweed = (req, res) => {
        let tweed_id = req.body.favorite[0];
        let user_id = req.body.favorite[1];

        db.makeTweed.favoritedTweed(user_id, tweed_id, (error, result) => {
            if (error) {
                console.log("ERRRRROROROROROROR");
                console.log(error);
                return;
            }
        });
    };

    const displayFavoriteTweeds = (req, res) => {
        let userIdToRemove = req.cookies["user_id"];

        db.makeTweed.gatherFavoriteTweeds(userIdToRemove, (error, result) => {
            if (error) {
                console.log("ERRRRROROROROROROR");
                console.log(error);
                return;
            } else {
                console.log(result);
                console.log("FAVORITED TWEEEEDS");

                const data = {
                    result,
                };
                res.render("favorites", data);
            }
        });
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        tweedPage: tweedPage,
        makeTweed: makeTweed,
        displayTweed: displayTweed,
        favoritedTweed: favoritedTweed,
        displayFavoriteTweeds: displayFavoriteTweeds,
    };
};
