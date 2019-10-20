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
            db.tweets.getAll(req,(err,result)=>{
                if (result===null) {
                    res.render("error",req)
                } else {
                    let data = {req,result};
                    res.render('tweets/home',data);
                };
            });
        };
    };

    let newControllerCallback = (req,res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/users/login')
        } else {
            let data = {req};
            res.render('tweets/new',data);
        };
    };

    let createControllerCallback = (req,res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/users/login')
        } else {
            db.tweets.insertNew(req,(err,result)=>{
                res.redirect('/');
            });
        };
    };

    let showControllerCallback = (req,res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/users/login')
        } else {
            db.tweets.showFollowersTweets(req,(err,result)=>{
                let data = {req,result};
                res.render('tweets/show',data);
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
        index: indexControllerCallback,
        show: showControllerCallback
    };
};