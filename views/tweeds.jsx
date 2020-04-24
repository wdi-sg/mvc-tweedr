var React = require("react");

class Tweed extends React.Component {
  render() {


let results = this.props.result || [];
let tweedData = results.map(info => {
    return  <li key={info.id}>{info.tweed}</li>
})

    return (
      <html>
        <head>
        <link rel="stylesheet" href="style.css"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
        </head>
        <body>
        <div className="tweed-container">
        <div className="jumbotron">
          <h1 className="display-4">TWEEDER</h1>
          <p className="lead">Tweed Yo Mind</p>

          <hr className="my-4"/>
          <form method="POST" action="/logout/?_method=delete">
          <button type="submit" className="btn btn-secondary logout">Logout</button>
          </form>
        </div>
        <div className="tweed-username">
        <h1>Welcome {this.props.userName}</h1>
        </div>

            <div className="tweed-header-input">

            <div className="tweed-head">
            <h3>Tweeeeds</h3>
            </div>

            <form method="POST" action="/makeTweed">
            <div className="input-group input-group-lg text-field">
            <input type="hidden" name="username" value={this.props.userName}/>
                 <button className="btn btn-outline-secondary tweed-button" type="submit">Tweed</button>
                 <textarea className="tweed-insert" type="text" name="tweed" rows="3" cols="50" placeholder="Write Something">
                 </textarea>
            </div>
            </form>
            <div className="tweed-input-field">
            <ol>
            {tweedData}
            </ol>
            </div>
            </div>





        </div>
        <script src="script.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Tweed;