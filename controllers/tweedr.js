module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
  let indexControllerCallback = (request, response) => {
      db.tweedr.getAll((error, allPokemon) => {
        response.render('tweedr/index', { allPokemon });
      });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
  };
}









// module.exports = (db) => {

//   /**
//    * ===========================================
//    * Controller logic
//    * ===========================================
//    */

//   const index = (request, response) => {

//       // console.log(db.pokemon)

//       const callback = (error, allStudents) => {
//         response.send(allStudents)
//       }

//       db.tweedr.getAll(callback);
//   };

//    const students = (request, response) => {

// response.send("banana");

//   };

//   return {
//     index: index,
//     students: students
//   };
// }













