var React = require("react");
var HeaderBar = require('../components/headerbar.jsx');

class Register extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                    <link rel="stylesheet" href="css/styles.css"/>
                </head>
                <body>
                    <HeaderBar/>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="main_container">
                            <h3 className="text-center">Edit Profile</h3>
                            <img src={userInfo.avatar} className="img-thumbnail mx-auto d-block"/>
                            <form method="POST" action="/register?_method=POST" className="text-center">

                            <div className="form-group row">
                                <label for="inputName" className="col-md-3 col-form-label">Screen Name</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" name="screen_name" value={userInfo.screen_name}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="inputAvatar" className="col-md-3 col-form-label">Avatar Image Link</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" name="avatar" value={userInfo.avatar}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                  <button type="submit" className="btn btn-primary">Update</button>
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
