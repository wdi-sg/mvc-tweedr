module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


let tweedPage = (req, res) => {
    res.render('tweeds');
}

let makeTweed = (req, res) => {
    console.log(req.body.tweed);

    //cant add username. Not sure why.
    console.log(req.body.username);

    let id = req.cookies['user_id'];
    db.makeTweed.insertTweed(req.body, id, (error, result) => {
         if(error) {
        console.log("ERRRRROROROROROROR");
        console.log(error);
        } else {
            console.log(result[0].tweed);
            const data = {};
           let tweed = result[0].tweed;
            data['tweed'] = tweed;
            res.render('tweeds', data);
        }
    })

    //name disappears after tweeding (redirect)
}





  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
tweedPage: tweedPage,
makeTweed: makeTweed

  };

}