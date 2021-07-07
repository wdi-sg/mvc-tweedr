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
                                             sessionId: loginSessionId,
                                             profile_desc: result.rows[0].profile_desc,
                                             profile_pic_url: result.rows[0].profile_pic_url,
                                             created_at: result.rows[0].created_at
                                            };
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

    let registerStart = (req,res) =>{
        res.render('login/register');
    }

    let registerSuccess = (req,res)=>{

        // check if username taken

        let enteredUser = req.body.username;

        req.body.password = sha256( SALT + req.body.password );

        //checks if username taken
        db.users.check(enteredUser, (err, result) =>{

            if( err ){
                res.send('error');
            } else {
                if(result == false){
                    res.send('User Name taken');
                } else if(result == true){ ///can use the username. create account

                    db.users.add(req.body, (err, resultAdd)=>{
                        console.log('ADDDED');// ADD ACCOUNT DETAILS
                        console.log(resultAdd)
                        //send cookies
                        const loginSessionId = sha256( SALT + SESHSALT + req.body.username);

                        res.cookie('userId', resultAdd.rows[0].id);
                        res.cookie('username', resultAdd.rows[0].username);
                        res.cookie('sessionId' , loginSessionId);
                        res.render('login/success', {resultAdd});
                    })
                }
            }
        })

        /*


        console.log('ADDDDD USERRR')
        console.log(req.body);
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
        */
    };



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    login: loginStart,
    register: registerStart,
    successL: loginSucess,
    successR: registerSuccess,
  };
}