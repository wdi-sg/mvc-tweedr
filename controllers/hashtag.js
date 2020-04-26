module.exports = (db) => {
     /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

   let hashtagsPage = (request,response) => {
      response.render('hashtag');
   }

   let addHashtag = (request, response) => {
    const tag = request.body.tag;

    db.hashtag.addHashtag(tag)
      .then(() => response.redirect('/'))
      .catch(err => console.error(err.stack))
   }

   /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */

   return{
    hashtagsPage: hashtagsPage,
    addHashtag: addHashtag
   }
}