module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);

  app.get('/login',(request, response)=>{
    response.render('login');
  });

  app.post('/index',(request,response)=> {
    let text =`INSERT INTO playlist (username, password) VALUES ($1, $2) RETURNING id`;
    let values = [request.body.username, request.body.password];
    pool.query(text, values);
    response.render('index');
  });
};
