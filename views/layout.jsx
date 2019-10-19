const React = require('react');

class Layout extends React.Component {
    render() {

          {/* <li className="nav-item">
                                    <a className="nav-link" href="http://localhost:3000/">Profile</a>
                                </li> */}

        return (
           <html>
                <head>

                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                    <link rel = "stylesheet" href = "/style.css"></link>
                    <title>tweedr.</title>
                </head>
                <body>
                    <div className="container">

                        <nav className="navbar navbar-expand-lg" style = {{backgroundColor: "#0b97b0"}}>
                            <span className="navbar-brand">tweedr.</span>
                            <ul className="nav mr-auto mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="http://localhost:3000/">Home</a>
                                </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="http://localhost:3000/register">Register</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="http://localhost:3000/login">Login</a>
                                </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="http://localhost:3000/tweed">Tweed!</a>
                                </li>

                            </ul>

                        </nav>

                        <div className="jumbotron">
                        {this.props.children}
                        </div>
                    </div>
                </body>
            </html>
        );
    };
};

module.exports = Layout;