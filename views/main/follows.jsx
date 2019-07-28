var React = require("react");
var HeaderBar = require('../components/headerbar.jsx');

class Register extends React.Component {
    render() {
        let followings = this.props.results[0].count;
        let followers = this.props.results[1].count;

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                    <link rel="stylesheet" href="css/styles.css"/>
                </head>
                <body>
                    <HeaderBar/>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="main_container">
                            <h3 className="text-center">Manage Follows</h3>
                            <div className="text-center"><h4>You are currently following <a href="follows/followings">{followings}</a> people. You have <a href="#">{followers}</a> follower(s) </h4></div>

                        </div>
                        <p></p>
                        <div className="text-center">
                            <h4>Who do you want to follow today?
                            <form method="POST" action="/newFollow?_method=POST" accept-charset="UTF-8">
                                <div className="input-group">
                                    <input type="text" name="screen_name"  className="form-control"/>
                                    <span className="input-group-btn">
                                    <input type="submit" name="commit" value="Submit" className="btn btn-dark"/>
                                    </span>
                                </div>
                            </form>
                            </h4>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Register;
