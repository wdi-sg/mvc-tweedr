var React = require('react');

class Login extends React.Component {

  render() {
    return (
    <html>
        <body>
            <div><h1>login leh</h1></div>
            <form method="POST" action="/login/success">
                <div>Name:<input type="text" name="name"/></div>  <br/>
                <div>Password:<input type="text" name="password"/></div>  <br/>
                <input type="submit" value="Submit"/>
            </form>
        </body>
    </html>
    );

  }


}

module.exports = Login;