const cookieParser = require('cookie-parser');
const sha256 = require('js-sha256');
const SALT = 'winter'; // cannot change

module.exports = (db) => {


  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let homeView = (req, res) => {
        const username = req.cookies
        db.users.view(username, (err,r)=>{
            console.log(r);
            const userDetails = r;
            if( err ){
                response.status(500).send('Error');
            } else {
                db.tweeds.allTweeds((err,resultTweeds)=>{
                    if( err ){
                        response.status(500).send('Error');
                    } else {
                        const data = {userDetails, resultTweeds}
                        res.render('home/home', {data});
                    }
                });
            }
        })
    };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    home: homeView,
  };
}

let cookieChecker = (reqCookie)=>{
    console.log('INSIDE THE COOKIE MONSTER!!!')
    console.log(reqCookie);
}