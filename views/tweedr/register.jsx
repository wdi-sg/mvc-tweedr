var React = require('react');

class Register extends React.Component {

  render() {


    return (
              <html>
                <body>
                  <h1>SIGN UP FOR AN ACCOUNT</h1>
                  <form action="/signed" method ="POST">
                  <input type="text" name ="username"/>
                  <br/>
                  <br/>
                  <input type="password" name ="password"/>
                  <br/>
                  <br/>

                  <input type="submit" value ="submit"/>


                  </form>

                </body>

              </html>
    );
  }
}

module.exports = Register;