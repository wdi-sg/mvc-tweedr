

module.exports = (dbPoolInstance) => {


  const registerPost = () => {

    const registerQuery = "INSERT INTO users (name,password) VALUES ($1,$2)";

    const hashedPassword = sha256(request.body.password);

    const userName = request.body.name;

    Const VALUES = [userName, hashedPassword];

    pool.query( registerQuery, VALUES, (request, response) =>{
      if(error){
        callback(error, null)
      }else{
        console.log(result.rows);
      }

    })



}
