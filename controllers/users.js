module.exports = (db) => {
/*
╔═╗┌─┐┌┐┌┌┬┐┬─┐┌─┐┬  ┬  ┌─┐┬─┐  ╦  ┌─┐┌─┐┬┌─┐
║  │ ││││ │ ├┬┘│ ││  │  ├┤ ├┬┘  ║  │ ││ ┬││
╚═╝└─┘┘└┘ ┴ ┴└─└─┘┴─┘┴─┘└─┘┴└─  ╩═╝└─┘└─┘┴└─┘
*/
    // let indexControllerCallback = (req,res) => {
    //     db.users.getAll((err,result)=>{
    //         res.send(result);
    //     });
    // };

    let newControllerCallback = (req,res) => {
        res.render('users/new');
    };

    let createControllerCallback = (req,res) => {
        db.users.insertNew(req,(err,result)=>{
            res.send("Success!");
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
                res.send('login success!');
            } else {
                res.send('wronglogin');
            };
        });
    };
/*
╔═╗─┐ ┬┌─┐┌─┐┬─┐┌┬┐
║╣ ┌┴┬┘├─┘│ │├┬┘ │
╚═╝┴ └─┴  └─┘┴└─ ┴
*/
    return {
        // index: indexControllerCallback,
        new: newControllerCallback,
        create: createControllerCallback,
        login: loginControllerCallback,
        check: checkControllerCallback
    };
};