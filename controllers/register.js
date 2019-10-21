
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
let registerForm = (request, response) => {
    response.render("users/register");
  };


let registerUser = (request, response) => {
    console.log(request.body);
    const newUser = request.body;

    const regCallback = (error, registeredUser) => {

      let hashedPassword = sha256(newUser.password + SALT);

      response.cookie('loggedin', hashedCookie)
            response.cookie('user_id', userID)


            response.send( queryRes.rows );

            response.render('home');

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

    };



  };







  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    registerForm,
    registerUser
  };

}


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