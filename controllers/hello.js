module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let helloControllerCallback = (request, response) => {
       response.send("Hello World!")
        };
    
  
  
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
      hello: helloControllerCallback,
    };
  
  };
  