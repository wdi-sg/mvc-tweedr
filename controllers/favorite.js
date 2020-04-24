module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let favoriteControllerCallback = (request, response) => {
    //response.send(request.body);
    //console.log(request.body);
    const data = [request.body];
    data.follower_id = request.body.follower_id;
    data.username=request.cookies.username;
    console.log("dfjkahfkjahjkfhadsjkfhdaskjfhadskjfhdkjdfshkhjzs");
    console.log(data);
     db.favorite.favorite(data,(error, follow) => {
        const dataOutgoing = {}
        dataOutgoing.follow=follow;
        //response.send(data);
        let username= request.cookies.username;

        console.log( " hahahahahahhahahahaha");
        //response.send(dataOutgoing);
        response.redirect("/");
        //response.render("pokemon/index", data);
      });
  };

  let notFavoriteControllerCallback = (request, response) => {
    //response.send("Deleting");
    //console.log(request.body);
    const data = [request.body];
    data.follower_id = request.body.follower_id;
    data.username=request.cookies.username;
    console.log("dfjkahfkjahjkfhadsjkfhdaskjfhadskjfhdkjdfshkhjzs");
    console.log(data);
     db.favorite.notFavorite(data,(error, follow) => {
        const dataOutgoing = {}
        dataOutgoing.follow=follow;
        //response.send(data);
        let username= request.cookies.username;

        console.log( " hahahahahahhahahahaha");
        //response.send(dataOutgoing);
        response.redirect("/");
        //response.render("pokemon/index", data);
      });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    favorite: favoriteControllerCallback,
    notFavorite: notFavoriteControllerCallback,
  };

}