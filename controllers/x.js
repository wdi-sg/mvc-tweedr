
// ------------------ WHAT DOES controllers/x.js DO? ------------------
// 0 - Gets called by routes.js. Takes in db.js
// 1 - Declaring functions that decides the appropriate response. (Render/redirect/send). If jsx file is rendered, call jsx files.
// 2 - Stores your function as an object (to be used later)
// 3 - Returns responses functions as object to be executed when URL is entered

module.exports = (db) => {
    // let whateverCC = whateverControllerCallback (Acronym)
    /* ===================================================
     * =========       1. CONTROLLER          ============
    =================================================== */

    // db === (db.js)
    //.x (tl;dr: results.rows) === xModelsObject (db.js) = allxModelsFunction(pool) (db.js) === ./models/x.js file === list of functions of query === results.rows
    // getAll === pool.query("SELECT * FROM x")
    // { allResult } = results.rows
    // 'x/index.jsx' = views/x/index.jsx file
    // { allResult } === const data = {allResult: allResult}

    // let index = (request, response) => {
    //     db.x.getAll((error, allResult) => {
    //         response.render('x/index.jsx', { allResult });
    //     });
    // };

    // let name = (request, response) => {
    //     db.x.getName((error, allResult) => {
    //         response.render('x/name.jsx', { allResult });
    //     });
    // };

    let loginPage = (request, response) => {
        let hasLoggedIn = request.cookies.hasLoggedIn;
        let userId = request.cookies.userId;
        if (hasLoggedIn === undefined){
            response.render('x/loginPage.jsx');
        } else {
            response.redirect(`home/${userId}`);
        }
    }

    let homePage = (request, response) => {
        let userId = request.cookies.userId;
        let hasLoggedIn = request.cookies.hasLoggedIn;
        if (hasLoggedIn === undefined){
            response.render('x/loginPage.jsx');
        } else {
            db.x.getNameUsers(userId,(error, name) => {
                let username = name[0]["username"];
                db.x.getTweedUsers(userId,(error, tweed) => {
                    db.x.getFollowing(userId,(error,following)=>{
                        response.render('x/home.jsx',{username,tweed,following});
                    })
                })
            });
        }
    };

    let userPage= (request, response) => {
        let visitingId = request.params.id;
        let userId = request.cookies.userId;
        let hasLoggedIn = request.cookies.hasLoggedIn;
        if (hasLoggedIn === undefined){
            response.render('x/loginPage.jsx');
        } else {
            if(visitingId === userId){
                db.x.getNameUsers(visitingId,(error, name) => {
                    let username = name[0]["username"];
                    response.render('x/userProfile.jsx',{username});
                });
            } else {
                db.x.getNameUsers(visitingId,(error, name) => {
                    let username = name[0]["username"];
                    db.x.getTweedUsers(visitingId,(error, tweed) => {
                        response.render('x/visitHome.jsx',{username,tweed});
                    })


                });
            }
        }
    };

    let postTweed= (request, response) => {
        let userId = request.cookies.userId;
        let tweed = request.body.tweed;
        db.x.getNameUsers(userId,(error, name) => {
            db.x.postTweed(userId, tweed, (error, tweed) => {
                response.redirect(`home/${userId}`);
            })
        });
    };

    /* ===================================================
     * =====          2. RETURN FUNCTION          ========
    =================================================== */
    return {
        // index,
        // name,
        loginPage,
        homePage,
        userPage,
        postTweed,
    };

}