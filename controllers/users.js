module.exports = (db) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let displayUser = (req, res) => {
        console.log(JSON.stringify(req.params), " PARAMS");
        let id = req.params.id;
        console.log(id);

        db.showUserProfile.userProfile(id, (error, result) => {
            if (error) {
                console.log("ERRRRROROROROROROR");
                console.log(error);
                return;
            } else {
                console.log(result);
                console.log("USER PROFILE DATA");
                const data = {
                    userData: result,
                };
                res.render("user_profile", data);
            }
        });
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        displayUser: displayUser,
    };
};
