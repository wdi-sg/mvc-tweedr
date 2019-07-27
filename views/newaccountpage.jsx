var React = require("react");

class createAccountPage extends React.Component {
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
                    <nav style = {navStyle} className="navbar navbar-light">
                    <a className="navbar-brand" href="/login">
                    <img src="https://img.icons8.com/windows/32/000000/retweet.png" width="30" height="30" className="d-inline-block align-top" alt=""/>Twee_dr</a>
                    </nav>
                    <div className="card border-danger mb-3">
                        <h5 className="card-header">Create new account</h5>
                        <div className="card-body">
                            <form method='post' action='/twee_dr/create'>
                                <div className="form-group">
                                    <h6 className="card-title">Username:</h6>
                                    <input type='text' name='name' placeholder='Enter username'/>
                                </div>
                                <div className="form-group">
                                    <h6 className="card-title">Password:</h6>
                                    <input type='password' name='password' placeholder='Enter password'/>
                                </div>
                                <div className="form-group">
                                    <h6 className="card-title">Email:</h6>
                                    <input type='text' name='email' placeholder='Enter email address'/>
                                </div>
                                <div className="form-group">
                                    <h6 className="card-title">Profile photo:</h6>
                                    <input type='text' name='photo' placeholder='Paste link here'/>
                                </div>
                                <button className="btn btn-danger my-2 my-sm-0" type="submit">Create</button>
                            </form>
                            <br />
                            <a href='/login' className="btn btn-danger my-2 my-sm-0">Login page</a>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
  }
}

module.exports = createAccountPage;