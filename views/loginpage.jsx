var React = require("react");

class loginPage extends React.Component {
  render() {
        var navStyle={
            backgroundColor:'#FFE0E3',
            margin:'0 0 10px 0'
        }
    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
        </head>
        <body>
            <div className="container">
                <nav style={navStyle}className="navbar navbar-light">
                    <a className="navbar-brand" href="/login">
                    <img src="https://img.icons8.com/windows/32/000000/retweet.png" width="30" height="30" className="d-inline-block align-top" alt=""/>Twee_dr</a>
                </nav>
                <div className="row">
                    <div className="col-8">
                        <div className="card bg-dark text-center text-white">
                            <img src="https://cdn.pixabay.com/photo/2018/07/28/22/12/sky-3569072_960_720.jpg" className="card-img"/>
                            <div className="card-img-overlay">
                                <h2 className="card-title">Welcome to Twee_dr</h2>
                                <br />
                                <img src="http://iconsetc.com/icons-watermarks/simple-white/bfa/bfa_retweet/bfa_retweet_simple-white_96x96.png"/>
                                <br />
                                <br />
                                <h5 className="card-text">Connecting You with the WORLD</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card border-danger mb-3">
                            <h5 className="card-header">Login</h5>
                            <div className="card-body">
                                <form method='post' action='/twee_dr/login'>
                                    <div className="form-group">
                                        <h6 className="card-title">Username:</h6>
                                        <input type='text' name='name' placeholder='Enter username'/>
                                    </div>
                                    <div className="form-group">
                                        <h6 className="card-title">Password:</h6>
                                        <input type='password' name='password' placeholder='Enter password'/>
                                    </div>
                                    <button className="btn btn-danger my-2 my-sm-0" type="submit">Login</button>
                                </form>
                                <br />
                                <a href='twee_dr/create' className="btn btn-danger my-2 my-sm-0">Create Account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = loginPage;