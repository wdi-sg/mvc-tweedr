module.exports = (db) => {
/*
╔═╗┌─┐┌┐┌┌┬┐┬─┐┌─┐┬  ┬  ┌─┐┬─┐  ╦  ┌─┐┌─┐┬┌─┐
║  │ ││││ │ ├┬┘│ ││  │  ├┤ ├┬┘  ║  │ ││ ┬││
╚═╝└─┘┘└┘ ┴ ┴└─└─┘┴─┘┴─┘└─┘┴└─  ╩═╝└─┘└─┘┴└─┘
*/
    // let indexControllerCallback = (req,res) => {
    //     db.tweets.getAll((err,result)=>{
    //         res.send(result);
    //     });
    // };
    let newControllerCallback = (req,res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/users/login')
        } else {
            res.render('tweets/new');
        };
    };

    let createControllerCallback = (req,res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/users/login')
        } else {
            db.tweets.insertNew(req,(err,result)=>{
                res.send("Success!");
            });
        };
    };
/*
╔═╗─┐ ┬┌─┐┌─┐┬─┐┌┬┐
║╣ ┌┴┬┘├─┘│ │├┬┘ │
╚═╝┴ └─┴  └─┘┴└─ ┴
*/
    return {
        new: newControllerCallback,
        create: createControllerCallback,
        // index: indexControllerCallback
    };
};