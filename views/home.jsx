var React = require("react");

class Home extends React.Component {
  render() {




    return (
      <html>
        <head>
        <link rel="stylesheet" href="style.css"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
        </head>
        <body>
        <div className="jumbotron">
          <h1 className="display-4">TWEEDER</h1>
          <p className="lead">What Ya Thinkin?</p>
          <hr className="my-4"/>

          <a className="btn btn-primary btn-lg home-nav" href="/login" role="button">Login</a>
          <a className="btn btn-primary btn-lg home-nav" href="/register" role="button">Register</a>
        </div>

        </body>
      </html>
    );
  }
}

module.exports = Home;