module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let getLoginFormControllerCallback = (req, res) => {
        res.render('users/login');
    };

    let getRegisterFormControllerCallback = (req, res) => {
        res.render("users/register");
    };

    const sha256 = require("js-sha256");

    let addUserControllerCallback = (req, res) => {

        const whenModelDone = (err, result) => {
            if (err) {
                console.log(`Query error,`, err);
            } else {
                res.cookie(`currentUserId`, result.user_id);
                res.cookie(`currentUserHandle`, result.handle);
                res.cookie(`isLoggedIn`, true);
                res.redirect(`/tweets`);
            };
        };

        let handleInput = req.body.handle;
        let displayNameInput = req.body.display_name;
        let dpUrlInput = req.body.dp_url;
        let hashedPw = sha256(req.body.password);
        db.users.addUser(handleInput, displayNameInput, dpUrlInput, hashedPw, whenModelDone);
    };

    let loginUserControllerCallback = (req, res) => {
        const whenModelIsDone = (err, result, ) => {
            if (err) {
                res.send(`Query error,`, err);
            } else {
                res.cookie(`currentUserId`, result.user_id);
                res.cookie(`currentUserHandle`, result.handle);
                res.cookie(`isLoggedIn`, true);
                res.redirect(`/tweets`);

            }
        }
        let handleInput = req.body.handle;
        let hashedPw = sha256(req.body.password);
        db.users.getUserLogin(handleInput, hashedPw, whenModelIsDone);
    }

    let logoutControllerCallback = (req, res) => {
        res.cookie(`currentUserId`, '');
        res.cookie(`currentUserHandle`, '');
        res.cookie(`isLoggedIn`, false);
        res.redirect(`/login`);
    }

    let getUsersControllerCallback = (req, res) => {

        let isLoggedIn = req.cookies.isLoggedIn;

        if (isLoggedIn === 'false' || !isLoggedIn) {
            return res.redirect(`/login`);
        } else {
            const whenModelDone = (err, result) => {
                if (err) {
                    console.log(`Query Error!`, err);
                } else {
                    const data = {
                        users: result
                    }
                    res.render(`users/all-users`, data);
                };
            };

            db.users.getAll(whenModelDone);
        };

    };

    let followUserControllerCallback = (req, res) => {
        let currentUserId = req.cookies.currentUserId
        let userIdToFollow = req.body.userToFollow

        const whenModelDone = (err, result) => {
            if (err) {
                console.log(`Error!`, err);
            } else {
                res.redirect(`/tweets`);
            }

        }

        db.users.followUser(currentUserId, userIdToFollow, whenModelDone);
    }

    let getOneUserControllerCallback = (req, res) => {

        let target = req.params.id;
        const whenModelDone = (err, result) => {
            if (err) {
                console.log(`Error!`, err)
            } else {
                res.render(`users/one-user`, {
                    foundUser: result
                })
            }
        }

        db.users.getOneUser(target, whenModelDone);

    }

    let getCurrentUserControllerCallback = (req, res) => {

        let currentUserId = req.cookies.currentUserId

        const whenModelDone = (err, result) => {
            if (err) {
                console.log(`Error!`, err)
            } else {
                res.render(`users/my-profile`, {
                    currentUser: result
                });

            }
        }

        db.users.getOneUser(currentUserId, whenModelDone)

    }

    let getEditUserFormControllerCallback = (req, res) => {

        let currentUserId = req.cookies.currentUserId;

        const whenModelDone = (err, result) => {
            if (err) {
                console.log(`Error!`, err);
            } else {
                res.render(`users/edit-profile`, {
                    currentUser: result,
                });
            }
        };

        db.users.getOneUser(currentUserId, whenModelDone);


    }

    let updateUserControllerCallback = (req, res) => {
        let currentUserId = req.cookies.currentUserId;


        const whenModelDone = (err, result) => {
            if (err) {
                console.log(`Error!`, err);
            } else {
                res.render(`users/my-profile`, {
                    currentUser: result,
                });
            }
        };

        let handleInput = req.body.handle;
        let displayNameInput = req.body.display_name;
        let dpUrlInput = req.body.dp_url;
        let hashedPw = req.body.password;
        db.users.updateUser(
          currentUserId,
          handleInput,
          displayNameInput,
          dpUrlInput,
          hashedPw,
          whenModelDone
        );
    }

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        getLoginForm: getLoginFormControllerCallback,
        getRegisterForm: getRegisterFormControllerCallback,
        addUser: addUserControllerCallback,
        loginUser: loginUserControllerCallback,
        logout: logoutControllerCallback,
        getAllUsers: getUsersControllerCallback,
        followUser: followUserControllerCallback,
        getOneUser: getOneUserControllerCallback,
        getCurrentUser: getCurrentUserControllerCallback,
        getEditUserForm: getEditUserFormControllerCallback,
        updateUser: updateUserControllerCallback
    };

}