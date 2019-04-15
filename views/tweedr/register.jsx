var React = require('react');

class Register extends React.Component {

  render() {
    return (
    <html>
        <body>
            <div><h1>Create a new account</h1></div>
            <form method="POST" action="/register/success">
                <div>Name:<input type="text" name="name"/></div>  <br/>
                <div>Password:<input type="text" name="password"/></div>  <br/>
                <div>Image:<input type="text" name="pic"/></div>  <br/>
                <input type="submit" value="Submit"/>
            </form>
        </body>
    </html>
    );

  }


}

module.exports = Register;