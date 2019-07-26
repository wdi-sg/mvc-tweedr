module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
    let addUserCallback = (request, response) => {

        db.tweedr.registerUser(request.body,(error, result) => {
            if(result === true){
                response.redirect('/tweedr/login');
            }else{
                response.redirect('/tweedr/register');
            }


        });
    };






    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        add_user:addUserCallback
    };

}