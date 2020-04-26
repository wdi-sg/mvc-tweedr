var React = require("react");

class AddFav extends React.Component {
  render() {
    return (
      <html>
        <head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link></head>
        <body>
          <div>
            <div className="container"><h1>Add Favorites</h1></div>
            <form className = "container">
              <div className="form-group">
                <label htmlFor="user_id">User Id</label>
                <input type="text" className="form-control" id="user_id" name="user_id"></input>
              </div>
              <div className="form-group">
                <label htmlFor="tweet_id">Tweet Id</label>
                <input type="text" className="form-control" id="tweet_id" name="tweet_id"></input>
              </div>
            </form>
            <div className="container">
                <button id="addfavbutton" className="btn btn-primary">Add Favorite</button>
            </div>
          </div>
        </body>
        <script src="/addfav.js"></script>
      </html>
    );
  }
}

module.exports = AddFav;