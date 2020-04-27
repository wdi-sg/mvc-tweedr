var React = require('react');

class Login extends React.Component {
  render() {

    return (
      <html>
      <head>
      <title>Tweedr</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
      </head>
        <body>
        <div className="container">
          <div className="col-lg-10">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="">Tweedr</a>
              <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
              <a className="nav-link float-right" href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fhollywoodslook.wordpress.com%2F2013%2F09%2F09%2Fzayn-malik-six-pack-abs-photo-shoot%2F&psig=AOvVaw236rNcJeSIH67KUW4wRqa4&ust=1586860855456000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODVjsCb5egCFQAAAAAdAAAAABAD">Popular</a>
              <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              </nav>
          <div>
            <h1>Login</h1>
            <div>
                <form action="/login" method="POST">
                    <p>
                        name <input name="name"/>
                    </p>
                    <p>
                        password <input name="password"/>
                    </p>
                    <p>

                        <input type="submit"/>
                    </p>
                </form>
            </div>
          </div>
          </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Login;