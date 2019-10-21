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
                    let data = {req,result};
                    res.render('follows/following',data);
                };
            });
        };
    };

    let showControllerCallback = (req,res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/users/login')
        } else {
            db.follows.getAllFollowers(req,(err,result)=>{
                if (result===null) {
                    res.send('no followers');
                } else {
                    let data = {req,result};
                    res.render('follows/followers',data);
                };
            });
        };
    };

    let createControllerCallback = (req,res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/users/login')
        } else {
            db.follows.addNew(req,(err,result)=>{
                res.redirect("/following");
            });
        };
    };
/*
╔═╗─┐ ┬┌─┐┌─┐┬─┐┌┬┐
║╣ ┌┴┬┘├─┘│ │├┬┘ │
╚═╝┴ └─┴  └─┘┴└─ ┴
*/
    return {
        show: showControllerCallback,
        create: createControllerCallback,
        index: indexControllerCallback
    };
};