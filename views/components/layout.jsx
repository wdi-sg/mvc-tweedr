var React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>

            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>
            <link rel="stylesheet" href="/styles.css"/>
        </head>

        <body>
            <div className="dropdown">


                <button className="btn btn-secondary dropdown-toggle acc-btn" type="button" id="dropdownAccButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Account
                </button>
                <div className="dropdown-menu" aria-label="dropdown-menu">
                    <form className="px-4 py-3">
                        <div className="form-group">
                            <label for="drop-down user">Username</label>
                            <input type="text" className="form-control" name="user" placeholder="Username"/>
                        </div>

                        <div className="form-group">
                            <label for="drop-down password">Password</label>
                            <input type="password" className="form-control" name="password" placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-primary" method="POST" formAction="/signup">Sign up</button>

                        <button type="submit" className="btn btn-primary ml-1" method="GET" formAction="/login">Login</button>
                    </form>
                </div>


            </div>
          {this.props.children}
          <p>so hi?</p>
        </body>
      </html>
    );
  }
}

module.exports = Layout;