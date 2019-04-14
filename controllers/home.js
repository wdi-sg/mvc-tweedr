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

    let homeView = (req, res) => {

        db.tweeds.allTweeds((err,resultTweeds)=>{
            if( err ){
                response.status(500).send('Error');
            } else {
                const userDetails = req.cookies; //
                // console.log("USER DETAILS");
                // console.log(userDetails);
                const data = {userDetails, resultTweeds}
                res.render('home/home', {data});
            }
        });
    }

    let add_home = (req,res) => {

        const checkSessionId = sha256 (SALT + SESHSALT + req.cookies.username); // check if user is same session
        if(checkSessionId == req.cookies.sessionId){


            const dataIn = { twds: req.body , userId: req.cookies.userId};


            db.tweeds.addTweeds(dataIn, (err,result)=>{
                if( err ){
                    response.status(500).send('Error');
                } else {
                    // console.log('TWEED RESULTS');
                    // console.log(result);
                    db.tweeds.allTweeds((err,resultTweeds)=>{
                        if( err ){
                            response.status(500).send('Error');
                        } else {
                        const userDetails = req.cookies; //
                        // console.log("USER DETAILS");
                        // console.log(userDetails);
                        const data = {userDetails, resultTweeds}
                        res.render('home/home', {data});
                    }
                });
                }
            })
            //data in to have userId and tweeds
        } else {
            res.send('login in again'); /// put a redirect page to login again
        }
    }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    home: homeView,
    add: add_home,
  };
}

let cookieChecker = (reqCookie)=>{
    console.log('INSIDE THE COOKIE MONSTER!!!')
    console.log(reqCookie);
}