module.exports = (db) => {
    /**
    * ===========================================
    * Controller logic
    * ===========================================
    */

    let show = (request, response) => {
        db.hashtags.getAll((error, allHashtags) => {
            response.render('hashtags/show-all', {allHashtags});
        });
    };

    let newForm = (request, response) => {
        response.render('hashtags/new');
    };

    let newHashtag = (request, response) => {
        db.hashtags.newHashtag(request.body.content, (error, result) => {
            response.redirect(302, '/hashtags/');
        });
    };



    /**
    * ===========================================
    * Export controller functions as a module
    * ===========================================
    */
    return {
        show: show,
        new: newForm,
        newHashtag: newHashtag
    };
}