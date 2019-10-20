var React = require("react");

class OneUser extends React.Component {
  render() {

    let Navbar = require('./navbar.jsx');

    let user;

    if (this.props.results){

        user =  <div class="card col-6 mx-auto mt-5 mb-3">
                  <img style={{height: "200" + "px"}, {width: "200" + "px"}} src={this.props.results[0].image} class="card-img-top rounded-circle align-self-center" alt="default photo"/>
                  <div class="card-body">
                    <h5 class="card-title">{this.props.results[0].username}</h5>
                    <form className="col align-self-center" method='POST' action='/followers'>
                        <div className="form-group">
                            <input type="number" className="form-control d-none" name="user_id" value={this.props.userID} required/>
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control d-none" name="followers_user_id" value={this.props.results[0].id} required/>
                        </div>
                        <button type="submit" className="btn btn-primary">Follow</button>
                    </form>
                  </div>
                </div>
    } else {
        user = <p>No such user</p>
    }

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        </head>
        <body>

          <Navbar/>
          <div className="container">
            <h3 className="mt-5">Search Result:</h3>
            {user}
          </div>



        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = OneUser;