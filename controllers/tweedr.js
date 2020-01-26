var sha256 = require('js-sha256');
const SALT = "salt256";

module.exports = (db) => {

// ========================================
// Controller logic
// =========================================

// SHOWS THE MAIN PAGE OF APP
const index = (request, response) => {
    const callback = (error, allUsers) => {
        response.send(allTweedr);
    }

    db.tweedr.getAll(callback);
};

const tweedr = (request, response) => {
    // response.send("Welcome to Tweedr");
    // response.render("index")
    response.render("login")
};





const login = (request, response) => {
    let name = request.body.name;
    let password = sha256( request.body.password + SALT );
    db.tweedr.login(name, password, (error, result) => {
    if (err) {
        response.status(500).send("Choose another password");
    } else {
/*    response.redirect('/index');*/
        response.send(result, "You are now logged into Tweedr");
    }
})
};





// THIS WORKS BUT I CAN"T SEEM TO GET BOTH REGISTER AND LOGIN TO SHOW ON THE
// const register = (request, response) => {
//     let name = request.body.name;
//     let password = sha256( request.body.password + SALT );
//     db.tweedr.register(name, password, (error, result) => {
//     if (err) {
//         response.status(500).send("Choose another password");
//     } else {
// /*    response.redirect('/index');*/
//         response.send(result, "You are now registered with Tweedr");
//     }
// })
// };





return {
    index: index,
    tweedr: tweedr,
    login: login
  };
}









// var sha256 = require('js-sha256');
// const SALT = "salt256";

// module.exports = (db) => {

// // ========================================
// // Controller logic
// // =========================================

// // SHOWS THE MAIN PAGE OF APP
// const indexControllerCallback = (request, response) => {
//     db.index.getAll((error, allUsers) => {
//         response.render("index");
//     });
// };

// // REGISTER NEW USER
// const newUser = (request, response) => {
//      db.index.getAll((error, allUsers) => {
//         response.render("register", {allUsers});
//      })
// }

// const register = (request, response) => {
//     let username = request.body.username;
//     let password = request.body.password;

//     db.index.register(username, password, (error) => {
//     if (err) {
//         response.status(500).send("Choose another password");
//     } else {
//         response.send("You are now registered with Tweedr");
//     }
// })
// };


// return {
//     indexControllerCallback: indexControllerCallback,
//     newUser: newUser,
//     register: register
//   };
// }







// module.exports = (db) => {

//   const index = (request, response) => {

//       const callback = (error, allStudents) => {
//         response.send(allStudents)
//       }

//       db.students.getAll(callback);
//   };

//    const students = (request, response) => {

// response.send("Welcome to Tweedr");

//   };

//   return {
//     index: index,
//     students: students
//   };
// }




// var sha256 = require('js-sha256');
// const SALT = "salt256";

// module.exports = (db) => {

//   /**
//    * ===========================================
//    * Controller logic
//    * ===========================================
//    */

//   const index = (request, response) => {
//       // console.log(db.tweedr)
//       const callback = (error, allTweedr) => {
//         response.send(allTweedr)
//       }

//       db.tweedr.getAll(callback);
//   };


//    const register = (request, response) => {
//     let username = request.body.username;
//     let userpassword = request.body.password;

//     const callbackFunction = (err, result) => {
//         if (err) {
//             console.log("error", err);
//             response.status(500).send("error");
//         } else {
//             response.send("You are now registered with Tweedr");
//         }
//     }
//     db.tweedr.register(username, userpassword, callbackFunction);
//     }


//   return {
//     index: index,
//     register: register
//   };
// }