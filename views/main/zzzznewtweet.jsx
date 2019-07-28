var React = require("react");
var HeaderBar = require('../components/headerbar.jsx');

class Home extends React.Component {
    render() {
        console.log("login page");
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                    <link rel="stylesheet" href="css/styles.css"/>
                </head>
                <body>
                    <HeaderBar/>
                    <div className="d-flex justify-content-center">
                        <div className="main_container">
                            <h3 className="text-center">New Tweet</h3>
                            <form method="POST" action="/newtweet?_method=POST" className="text-center">

                            <div className="form-group row">
                                <label for="inputName" className="col-md-3 col-form-label">Tweet Message</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" name="tweetmsg" id="inputName"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                  <button type="submit" className="btn btn-primary">Send</button>
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

module.exports = Home;
