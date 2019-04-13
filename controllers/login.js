const cookieParser = require('cookie-parser');
const sha256 = require('js-sha256');
const SALT = 'winter'; // cannot change

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
        db.users.view(req.body, (err,singleUser)=>{
            if(err){
                res.send('Error!')
            } else {
                console.log(singleUser);
                res.cookie('userId', singleUser.rows[0].id);
                res.cookie('username', singleUser.rows[0].username);

                res.render('login/success', {singleUser});
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