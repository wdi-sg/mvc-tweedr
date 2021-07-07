var React = require("react");

class Register extends React.Component {
  render() {

    let dbUsers = this.props.users;
    let currentUser = this.props.currentUser;
    let alertUser;

    if (this.props.users){
        for (let i=0; i<dbUsers.length; i++){
            if (currentUser === dbUsers[i].username){
                alertUser =     <div class="alert alert-danger text-center" role="alert">
                                  Username is already taken
                                </div>
            } else {
                alertUser;
            };
        };
    };


    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        </head>
        <body>


            {alertUser}
            <h1 className="display-4 text-center mt-5">Welcome to Tweedr</h1>
            <div className="container mt-5">
                <form className="col align-self-center" method='POST' action='/register'>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" name="username" placeholder="Enter Username" required/>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Password" required/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control d-none" name="image" value="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/24e30be0-bd77-4292-b0e6-81262089bad7/d2mndmz-2cce3a75-89eb-4ae5-88a1-7ae95b0287cb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI0ZTMwYmUwLWJkNzctNDI5Mi1iMGU2LTgxMjYyMDg5YmFkN1wvZDJtbmRtei0yY2NlM2E3NS04OWViLTRhZTUtODhhMS03YWU5NWIwMjg3Y2IuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sYMFdXnLVePwBBoKaXnb3yhveaXBt-bBWK1Tw5YYp9I" required/>
                  </div>
                  <button type="submit" className="btn btn-primary">Register</button>
                </form>
                <br/>
                <form className="col align-self-center" method='GET' action='/login'>
                    <button type="submit" className="btn btn-primary">Already a user? Login here</button>
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

module.exports = Register;