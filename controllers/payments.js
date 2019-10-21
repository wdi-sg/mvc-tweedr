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
            let data = {req,result: null};
            res.render('payments/index',data);
        };
    };

    let getSentControllerCallback = (req,res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/users/login')
        } else {
            db.payments.getUserSentPayments(req,(err,result)=>{
                let data = {req,result};
                res.render("payments/index",data);
            });
        };
    };

    let getReceivedControllerCallback = (req,res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/users/login')
        } else {
            db.payments.getUserReceivedPayments(req,(err,result)=>{
                let data = {req,result};
                res.render("payments/index",data);
            });
        };
    };

    let totalSentControllerCallback = (req,res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/users/login')
        } else {
            db.payments.getPaymentTotalBySender(req,(err,result)=>{
                let data = {req,result};
                res.render("payments/index",data);
            });
        };
    };

    let totalReceivedControllerCallback = (req,res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/users/login')
        } else {
            db.payments.getPaymentTotalByRecipient(req,(err,result)=>{
                let data = {req,result};
                res.render("payments/index",data);
            });
        };
    };
/*
╔═╗─┐ ┬┌─┐┌─┐┬─┐┌┬┐
║╣ ┌┴┬┘├─┘│ │├┬┘ │
╚═╝┴ └─┴  └─┘┴└─ ┴
*/
    return {
        index: indexControllerCallback,
        getSent: getSentControllerCallback,
        getReceived: getReceivedControllerCallback,
        totalSent: totalSentControllerCallback,
        totalReceived: totalReceivedControllerCallback
    };
};