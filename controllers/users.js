module.exports = (db) => {
/*
╔═╗┌─┐┌┐┌┌┬┐┬─┐┌─┐┬  ┬  ┌─┐┬─┐  ╦  ┌─┐┌─┐┬┌─┐
║  │ ││││ │ ├┬┘│ ││  │  ├┤ ├┬┘  ║  │ ││ ┬││
╚═╝└─┘┘└┘ ┴ ┴└─└─┘┴─┘┴─┘└─┘┴└─  ╩═╝└─┘└─┘┴└─┘
*/
    let indexControllerCallback = (req,res) => {
        db.users.getAll(req,(err,result)=>{
            if (req.cookies.loggedIn !== 'yes') {
                res.redirect('/users/login')
            } else {
                db.users.getAll(req,(err,result)=>{
                    res.send(result);
                });
            };
        });
    };

    let newControllerCallback = (req,res) => {
        res.render('users/new');
    };

    let createControllerCallback = (req,res) => {
        db.users.insertNew(req,(err,result)=>{
            if (err) {
                res.send(err.detail);
            } else {
                res.send("Success!");
            };
        });
    };

    let loginControllerCallback = (req,res) => {
        res.render('users/login');
    };

    let checkControllerCallback = (req,res) => {
        db.users.verifyLogin(req,(err,result)=>{
            if (result !== null) {
                res.cookie('username',result[0].username);
                res.cookie('loggedIn','yes');
                res.cookie('userId',result[0].id);
                res.redirect('/');
            } else {
                res.send('wronglogin');
            };
        });
    };

    let showControllerCallback = (req,res) => {
        db.users.showUser(req,(err,result)=>{
            let data = {req,result};
            res.render('users/show',data);
        });
    };
/*
╔═╗─┐ ┬┌─┐┌─┐┬─┐┌┬┐
║╣ ┌┴┬┘├─┘│ │├┬┘ │
╚═╝┴ └─┴  └─┘┴└─ ┴
*/
    return {
        index: indexControllerCallback,
        new: newControllerCallback,
        create: createControllerCallback,
        login: loginControllerCallback,
        check: checkControllerCallback,
        show: showControllerCallback
    };
};