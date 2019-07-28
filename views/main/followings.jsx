var React = require("react");
var HeaderBar = require('../components/headerbar.jsx');

class Register extends React.Component {
    render() {
        let followings = this.props.results.map((follows)=>{
            return <li className="list-group-item">{follows.screen_name}</li>
        });
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
                            <h3 className="text-center">You are currently following</h3>
                            <div className="text-center"></div>
                            <ul className="list-group">
                                {followings}
                            </ul>
                        </div>
                        <p></p>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Register;
