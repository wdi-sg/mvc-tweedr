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
            let result =  displayTweed();
            console.log("-----------------------");
            console.log(result);
            let userName = req.cookies['user_name'];
            const data ={
                result,
                userName
            }
            res.render('tweeds', data);
        }
    })
}

let displayTweed =  () => {

    let response =  db.makeTweed.displayTweed((error, result) => {
        if(error) {
        console.log("ERRRRROROROROROROR");
        console.log(error);
        return;
    } else {
            // console.log("CHECKING");
            //console.log(result);
            // console.log("CHECKING AGAIN");


            return result;

    }
});

}



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
tweedPage: tweedPage,
makeTweed: makeTweed,
displayTweed: displayTweed

  };

}