var React = require('react');

class Login extends React.Component {
  render() {
    console.log("login");
    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap" rel="stylesheet"></link>
        </head>
        <body>
         <h2 class="text-center" style={{margin: '100px auto', width: '500px', fontFamily: 'Montserrat'}}>Log In to your Account: </h2>
         <main class="form-row" style={{ margin: '50px auto',  width: '500px', fontFamily: 'Montserrat'}} >
            <form method="POST" action="/login" style={{width: '300px', display: 'block', margin: '0 auto'}}>
             Username: <input name="name" class="text-center" placeholder="Your Username:" style={{width: '300px', display: 'block', margin: '0 auto'}}/>
             Email: <input name="email" class="text-center" placeholder="Your Email:" style={{width: '300px', display: 'block', margin: '0 auto'}}/>
             Password: <input name="password" class="text-center" placeholder="Your password" style={{width: '300px', display: 'block', margin: '0 auto'}}/>
             <input type="submit" value="login"class="btn btn-primary btn-block" style={{width: '300px', display: 'block', margin: '10px auto'}}/>
            </form>
        </main>
          </body>
      </html>
    );
  }
}

module.exports = Login;

//login
//get form
// app.get('/login', (request, response) => {
//     response.render('login')
// });

// //post


// app.post('/login', (request, response) => {
//     let newUser = request.body;
//     let requestUsername = request.body.name;
//     let requestPassword = request.body.password;

//     // check in the database for a row with this user
//     const queryString = "SELECT * from users WHERE name='" + requestUsername + "'";
//     console.log("db query", queryString);

//     pool.query(queryString, (err, result) => {

//         if (err) {
//             console.error('query error:', err.stack);
//             response.send('query error');
//         } else {
//             console.log('query result:', result.rows);
//             // if this user exists in the db

//             if (result.rows.length > 0) {

//                 let hashedRequestPassword = sha256(requestPassword + SALT);
//                 console.log("hashed request password: " + hashedRequestPassword);

//                 // check to see if the password in request.body matches what's in the db
//                 //or hashedRequestPassword === requestPassword ?
//                 if (hashedRequestPassword === result.rows[0].password) {
//                     let user_id = result.rows[0].id

//                     let hashedCookie = sha256(SALT + user_id);

//                     response.cookie('user_id', user_id);
//                     response.cookie('hasLoggedIn', hashedCookie);

//                     // if it matches they have been verified, log them in
//                     response.send('about to log you in')

//                 } else {

//                     response.status(403).send('wrong password');
//                 }


//                 //

//             } else {
//                 response.status(403).send('wrong username');

//             }


//             // redirect to home page
//             // response.render('home');
//         }
//     });

//     response.render('home');


// });