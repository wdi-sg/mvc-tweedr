var React = require("react");

class Login extends React.Component {
  render() {

    console.log(this.props.users)
    let dbUsers = this.props.users;
    let currentUser = this.props.currentUser;
    let alertUser;

    for (let i=0; i<dbUsers.length; i++){
        if (currentUser === dbUsers[i].username){
            alertUser =     <div class="alert alert-primary text-center" role="alert">
                              Successfully registered as {currentUser}
                            </div>
        } else {
            alertUser;
        }
    }


    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        </head>
        <body>


            {alertUser}
            <h1 className="display-4 text-center mt-5">Welcome to Tweedr</h1>
            <div className="container mt-5">
                <form className="col align-self-center" method='POST' action='/login'>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" name="username" placeholder="Enter Username" required/>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Password" required/>
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <br/>
                <form className="col align-self-center" method='GET' action='/register'>
                    <button type="submit" className="btn btn-primary">Not a user yet? Register here</button>
                </form>
            </div>





        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = Login;