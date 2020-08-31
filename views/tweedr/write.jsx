var React = require('react');

class Write extends React.Component {

  render() {


    return (
              <html>
                <body>
                  <h1>LOGIN</h1>
                  <form action="/" method ="POST">
                  <input type="text" name ="tweet"/>
                  <br/>
                  <br/>

                  <input type="submit" value ="submit"/>


                  </form>

                </body>

              </html>
    );
  }
}

module.exports = Write;