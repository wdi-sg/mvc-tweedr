module.exports = (db) => {
/*
╔═╗┌─┐┌┐┌┌┬┐┬─┐┌─┐┬  ┬  ┌─┐┬─┐  ╦  ┌─┐┌─┐┬┌─┐
║  │ ││││ │ ├┬┘│ ││  │  ├┤ ├┬┘  ║  │ ││ ┬││
╚═╝└─┘┘└┘ ┴ ┴└─└─┘┴─┘┴─┘└─┘┴└─  ╩═╝└─┘└─┘┴└─┘
*/
    let indexControllerCallback = (req,res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/users/login')
        } else {
            db.follows.getAllFollowing(req,(err,result)=>{
                if (result===null) {
                    res.send('following no one');
                } else {
                    res.send(result);
                };
            });
        };
    };

    // let newControllerCallback = (req,res) => {
    //     if (req.cookies.loggedIn !== 'yes') {
    //         res.redirect('/users/login')
    //     } else {
    //         res.render('tweets/new');
    //     };
    // };

    // let createControllerCallback = (req,res) => {
    //     if (req.cookies.loggedIn !== 'yes') {
    //         res.redirect('/users/login')
    //     } else {
    //         db.follows.addNew(req,(err,result)=>{
    //             res.redirect("/following");
    //         });
    //     };
    // };
/*
╔═╗─┐ ┬┌─┐┌─┐┬─┐┌┬┐
║╣ ┌┴┬┘├─┘│ │├┬┘ │
╚═╝┴ └─┴  └─┘┴└─ ┴
*/
    return {
        // new: newControllerCallback,
        // create: createControllerCallback,
        index: indexControllerCallback
    };
};