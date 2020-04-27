module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let submitFavourite = (request, response) => {
  
        db.pokemon.submitNewFavorite(request, response, (error) => {
            if(error) {
              console.log('Query error: ', error.message);
              response.send("query error");
            }
          });
        };
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        submitFavourite: submitFavourite
    };
  
  }
  