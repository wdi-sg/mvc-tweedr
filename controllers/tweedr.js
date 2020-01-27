var sha256 = require('js-sha256');
const SALT = "salt256";

module.exports = (db) => {
// // ========================================
// // Controller logic
// // =========================================



// REGISTER USER
    const registerUser = (request, response) => {
            response.render("home");
        }

    const register = (request, response) => {
        let name = request.body.name;
        let password = sha256( request.body.password + SALT );
        db.tweedr.register(name, password, (error, result) => {
        if (err) {
            response.status(500).send("Choose another password");
        } else {
                response.send(result, "You are now registered with Tweedr");
            }
        });
    }


// USER LOGIN
    const loginUser = (request, response) => {
            response.render("home");
        }

    const login = (request, response) => {
        let name = request.body.name;
        let password = sha256( request.body.password + SALT );
        db.tweedr.login(name, password, (error, result) => {
        if (err) {
            response.status(500).send("Choose another password");
        } else {
                response.send(result, "You are now logged inr");
            }
        });
    }


    // CREATE NEW MESSAGE ==> messages do not get saved. Need to review this.
/*    const createMessage = (request, response) => {
            response.render("message");
        }

    const newMessage = (request, response) => {
        let message = request.body.message;
        let user_id = request.body.user_id;
        db.tweedr.newMessage(name, password, (error, result) => {
        if (err) {
            response.status(500).send("Try again");
        } else {
                response.send(result, "You have created a new tweet");
            }
        });
    }
*/


return {

    registerUser,
    register,

    loginUser,
    login

/*    createMessage,
    newMessage*/
  };
}





// var sha256 = require('js-sha256');
// const SALT = "salt256";

// module.exports = (db) => {

// // ========================================
// // Controller logic
// // =========================================
// const index = (request, response) => {
//     const callback = (error, allUsers) => {
//         response.send(allTweedr);
//     }

//     db.tweedr.getAll(callback);
// };

// const tweedr = (request, response) => {
//     // response.send("Welcome to Tweedr");
//     // response.render("index")
//     response.render("login")
// };


// const login = (request, response) => {
//     let name = request.body.name;
//     let password = sha256( request.body.password + SALT );
//     db.tweedr.login(name, password, (error, result) => {
//     if (err) {
//         response.status(500).send("Choose another password");
//     } else {
// /*    response.redirect('/index');*/
//         response.send(result, "You are now logged into Tweedr");
//     }
// })
// };


// // THIS WORKS BUT I CAN"T SEEM TO GET BOTH REGISTER AND LOGIN TO SHOW ON THE
// // const register = (request, response) => {
// //     let name = request.body.name;
// //     let password = sha256( request.body.password + SALT );
// //     db.tweedr.register(name, password, (error, result) => {
// //     if (err) {
// //         response.status(500).send("Choose another password");
// //     } else {
// // /*    response.redirect('/index');*/
// //         response.send(result, "You are now registered with Tweedr");
// //     }
// // })
// // };


// return {
//     index: index,
//     tweedr: tweedr,
//     login: login
//   };
// }