const cookieParser = require('cookie-parser');
const sha256 = require('js-sha256');
const SALT = 'winter'; // cannot change
const SESHSALT = 'summer';

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let loginStart = (req, res) => {

        res.render('login/login');
    };

    let loginSucess = (req,res) =>{
        req.body.password = sha256( SALT + req.body.password );
        const loginSessionId = sha256( SALT + SESHSALT + req.body.username);
        db.users.findUser(req.body, (err,result)=>{
            if( err ){ //if err returns true
                res.send('Error!');
            } else { // need to check results
                console.log('stuffffff');
                console.log(result);
                if(result == null){//user does not exist,
                    res.render('login/fail');
                } else if (result.rows[0].username == req.body.username && result.rows[0].password == req.body.password){ //password and username matches database entry -- works
                    // to go to home page... it needs to userid cookies, tweeds data

                    db.tweeds.allTweeds((err,resultTweeds)=>{
                    if( err ){
                        response.status(500).send('Error');
                    } else {
                        //first time login set userDetails variables to pass
                        const userDetails = {userId: result.rows[0].id,
                                             username: result.rows[0].username,
                                             sessionId: loginSessionId};

                        // Assign coookies
                        res.cookie('userId', result.rows[0].id);
                        res.cookie('username', result.rows[0].username);
                        res.cookie('sessionId' , loginSessionId);

                        const data = {userDetails, resultTweeds}
                        res.render('home/home', {data});
                    }
                });
                } else { // password and user name wrong
                    res.render('login/fail');
                }
            }
        })
    }

    let registerSuccess = (req,res)=>{
        //prepares hash password for model js
        req.body.password = sha256( SALT + req.body.password );
        db.users.add(req.body, (err,singleUser)=>{
            if(err){
                res.send('Error!')
            }else{
                if(singleUser == null){
                    res.send('User name taken');
                } else {
                    //sends cookie

                    console.log(singleUser);
                    res.cookie('userId', singleUser.rows[0].id);
                    res.cookie('username', singleUser.rows[0].username);

                    res.render('login/success', {singleUser});
                }
            }
        })
    };



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    login: loginStart,
    successL: loginSucess,
    successR: registerSuccess,
  };
}