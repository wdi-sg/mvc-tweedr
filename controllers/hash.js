/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (db) => {

  // `dbPoolInstance` is accessible within this function scope

  let allHash = (request, response) => {
    let dataOutput={};
    //response.send("Boom Chang Chang Chang");

         db.hash.allHash((error, hash) => {
        const data = {}
        data.hash=hash;
        //response.send(data);
        let username= request.cookies.username;
        if(username===undefined)
        {
            data.name="guest";
        }
        else
        {
            data.name= username;
        }
        //response.send(data);
        response.render("hash/allhash", data);
      });
  };

  let singleHash = (request, response) => {
    //let dataOutput={};
    //response.send(request.params);

         db.hash.singleHash(request.params.id,(error, incoming) => {
        const data = {}
        data.hash=incoming;
        //response.send(data);
        let username= request.cookies.username;
        if(username===undefined)
        {
            data.name="guest";
        }
        else
        {
            data.name= username;
        }
        //response.send(data);
        response.render("hash/singlehash", data);
      });
  };



  return {
    allHash:allHash,
    singleHash:singleHash,
  };
};