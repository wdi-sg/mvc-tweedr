var React = require("react");

class Login extends React.Component {
    render() {
        console.log("Tweedr Login Page");
        console.log("===================");
        return (
            <html>
                <head />
                <body>
                    <h1>Tweedr Login</h1>
                    <div>
                        <form action="/loggedin" method="POST">
                            <p>
                                Email <input name="email" />
                            </p>
                            <p>
                                Password <input name="password" />
                            </p>
                            <p>
                                <input type="submit" />
                            </p>
                        </form>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Login;
