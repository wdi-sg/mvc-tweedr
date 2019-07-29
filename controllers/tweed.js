const helper = require('../helper');

module.exports = (db) => {

  let homeRequestHandler = async function(request, response)  {
    try {
        if (helper.checkCookiesForLogin(request.cookies) === true)  {
          //define all tweedr vatiables

        }
    }
  }
};

let addNewTweedrRequestHandler = async function(request, response)  {
  try {

  } catch (e) {

  } finally {

  }
}

return {
  homeRequestHandler,
  addNewTweedrRequestHandler
};
