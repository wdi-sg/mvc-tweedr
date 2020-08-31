module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let allTweets = (request,response)=>{
      db.tweedr.getAllTweets((err,result)=>{
        if(err){
            response.send('Error at getAllTweets')
        } else{
            let data =result.rows;
            let obj = {data:data};
            console.log(obj)

            response.render('tweedr/index',obj)


        }
        })
  }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    allTweets
  };

}