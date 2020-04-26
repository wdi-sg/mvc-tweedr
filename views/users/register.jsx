var React = require("react");

class Register extends React.Component {
    render() {
        console.log("Tweedr Registration");
        console.log("===================");
        return (
            <html>
                <head />
                <body>
                    <h1>Tweedr Registration</h1>
                    <div>
                        <form action="/registered" method="POST">
                            <p>
                                Name <input name="name" />
                            </p>
                            <p>
                                Password <input name="password" />
                            </p>
                            <p>
                                Email <input name="email" />
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

module.exports = Register;
