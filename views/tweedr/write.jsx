var React = require('react');

class Write extends React.Component {

  render() {


    return (
              <html>
                <body>
                  <h1>WRITE A TWEED, {this.props.username}</h1>
                  <form action="/posted" method ="POST">
                  <input type="text" name ="tweed"/>
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