module.exports = (dbPoolInstance) => {

    let getUserSentPayments = (req,callback) => {
        let values = [req.cookies.userId];
        let query = 'SELECT * FROM payments WHERE sender_id=$1';
        dbPoolInstance.query(query,values,(err,res)=>{
            if (err) {
                callback(err,null);
            } else {
                if (res.rows.length>0) {
                    callback(null,res.rows);
                } else {
                    callback(null,null);
                };
            };
        });
    };

    let getUserReceivedPayments = (req,callback) => {
        let values = [req.cookies.userId];
        let query = 'SELECT * FROM payments WHERE recipient_id=$1';
        dbPoolInstance.query(query,values,(err,res)=>{
            if (err) {
                callback(err,null);
            } else {
                if (res.rows.length>0) {
                    callback(null,res.rows);
                } else {
                    callback(null,null);
                };
            };
        });
    };

    let getPaymentTotalBySender = (req,callback) => {
        let values = [req.cookies.userId];
        let query = 'SELECT SUM(amount) FROM payments WHERE sender_id=$1';
        dbPoolInstance.query(query,values,(err,res)=>{
            if (err) {
                callback(err,null);
            } else {
                if (res.rows.length>0) {
                    callback(null,res.rows);
                } else {
                    callback(null,null);
                };
            };
        });
    };

    let getPaymentTotalByRecipient = (req,callback) => {
        let values = [req.cookies.userId];
        let query = 'SELECT SUM(amount) FROM payments WHERE recipient_id=$1';
        dbPoolInstance.query(query,values,(err,res)=>{
            if (err) {
                callback(err,null);
            } else {
                if (res.rows.length>0) {
                    callback(null,res.rows);
                } else {
                    callback(null,null);
                };
            };
        });
    };

    return {
        getUserSentPayments,
        getUserReceivedPayments,
        getPaymentTotalBySender,
        getPaymentTotalByRecipient
    };
};