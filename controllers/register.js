
module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
//the routes

// app.get('/register', (request, response) => {
//     response.render('register')

// });

// const SALT = "nothing";

let registerForm = (request, response) => {
    response.render("users/register");
};


let registerUser = (request, response) => {
    let inputUsername = request.body.name;
    let inputEmail = request.body.email;
    let inputPwd = request.body.password;
    // let hashedPassword = sha256(inputPwd + SALT);

    const newUser = [inputUsername, inputEmail, inputPwd];
    console.log("In controller: ", newUser);

    db.tweets.registerUser(inputUsername, inputEmail, inputPwd, (error, registeredUser) => {
        response.send("This is from register controller. User has been created!");
    });
};



   /* const regCallback = (error, registeredUser) => {

      let hashedPassword = sha256(newUser.password + SALT);

      response.cookie('loggedin', hashedCookie)
            response.cookie('user_id', userID)
            console.log

            response.send( queryRes.rows );

            response.render('home');*/

             // let userID = queryRes.rows[0].id;
//         let hashedCookie = sha256(userID + 'loggedin' + SALT);

//         if (err) {
//             console.error('query error:', err.stack);
//             response.send('query error');
//         } else {
//             console.log('query result:', queryRes);

//             response.cookie('loggedin', hashedCookie)
//             response.cookie('user_id', userID)


//             // response.send( queryRes.rows );
//             //response render home, after issue fixed
//             response.render('home');

/*    };*/











  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    registerForm: registerForm,
    registerUser: registerUser
  };

 };


// //post
// app.post('/register', (request, response) => {
//     console.log(request.body);
//     let newUser = request.body;
//     let hashedPassword = sha256(newUser.password + SALT);

//     const queryString = 'INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *';

//     const values = [
//         newUser.name,
//         hashedPassword
//     ];

//     pool.query(queryString, values, (err, queryRes) => {

//         let userID = queryRes.rows[0].id;
//         let hashedCookie = sha256(userID + 'loggedin' + SALT);

//         if (err) {
//             console.error('query error:', err.stack);
//             response.send('query error');
//         } else {
//             console.log('query result:', queryRes);

//             response.cookie('loggedin', hashedCookie)
//             response.cookie('user_id', userID)


//             // response.send( queryRes.rows );
//             //response render home, after issue fixed
//             response.render('home');

//         }
//     });
// });