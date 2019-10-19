
// ------------------ WHAT DOES controllers/x.js DO? ------------------
// 0 - Gets called by routes.js. Takes in db.js
// 1 - Declaring functions that decides the appropriate response. (Render/redirect/send). If jsx file is rendered, call jsx files.
// 2 - Stores your function as an object (to be used later)
// 3 - Returns responses functions as object to be executed when URL is entered
const sha256 = require('js-sha256');
let SALT = 'tweedr';

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

    let loginPage = (request, response) => {
        let hasLoggedIn = request.cookies.hasLoggedIn;
        let user_id = request.cookies.user_id;
        if (hasLoggedIn === undefined){
            response.render('x/loginPage.jsx');
        } else {
            response.redirect(`home/${user_id}`);
        }
    }

    let homePage = (request, response) => {
        let user_id = request.cookies.user_id;
        let hasLoggedIn = request.cookies.hasLoggedIn;
        if (hasLoggedIn === undefined){
            response.render('x/loginPage.jsx');
        } else {
            db.x.getNameUsers(user_id,(error, name) => {
                let username = name[0]["username"];
                db.x.getTweedUsers(user_id,(error, tweed) => {
                    db.x.getFollowing(user_id,(error,following)=>{
                        response.render('x/home.jsx',{username,tweed,following});
                    })
                })
            });
        }
    };

    let userPage= (request, response) => {
        let visitingId = request.params.id;
        let user_id = request.cookies.user_id;
        let hasLoggedIn = request.cookies.hasLoggedIn;
        if (hasLoggedIn === undefined){
            response.render('x/loginPage.jsx');
        } else {
            if(visitingId === user_id){
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
        let user_id = request.cookies.user_id;
        let tweed = request.body.tweed;
        db.x.getNameUsers(user_id,(error, name) => {
            db.x.postTweed(user_id, tweed, (error, tweed) => {
                response.redirect(`home/${user_id}`);
            })
        });
    };

    let upin = (request,response) =>{
        let upin = request.params.upin;
        if(upin === "in"){
            let h1 = 'Login Page';
            response.render("x/signupin.jsx",{h1});
        } else if (upin === "up") {
            let h1 = 'Register Page';
            response.render("x/signupin.jsx",{h1});
        }
    }

    let checkupin = (request,response)=>{
        let upin = request.params.upin;
        if (upin === "in"){
            let username = request.body.username;
            let password = request.body.password;
            db.x.checkLogin(username, password, (error, results)=>{
                if(results === null){
                    response.send("Wrong password or username");
                } else {
                    let user_id = results[0]["id"]
                    let hasLoggedIn = sha256(user_id + SALT);
                    response.cookie('user_id',user_id);
                    response.cookie('hasLoggedIn',hasLoggedIn);
                    response.redirect(`/home/${user_id}`);
                }
            })
        } else if (upin === "up"){
            response.send(request.body.password);
        }
    }

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
        upin,
        checkupin,
    };

}