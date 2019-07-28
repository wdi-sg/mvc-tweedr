var React = require("react");
var HeaderBarLess = require('../components/headerbar_less.jsx');

class Register extends React.Component {
    render() {

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                    <link rel="stylesheet" href="css/styles.css"/>
                </head>
                <body>
                    <HeaderBarLess/>
                    <div className="d-flex justify-content-center">
                        <div className="main_container">
                            <h3 className="text-center">Register</h3>
                            <form method="POST" action="/register?_method=POST" className="text-center">

                            <div className="form-group row">
                                <label for="inputName" className="col-md-3 col-form-label">Screen Name</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" name="screen_name" id="inputName"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="inputPassword" className="col-md-3 col-form-label">Password</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" name="password" id="inputPassword"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="inputAvatar" className="col-md-3 col-form-label">Avatar Image Link</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" name="avatar" id="inputAvatar"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                  <button type="submit" className="btn btn-primary">Sign Up</button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Register;
