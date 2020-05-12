const React = require('react');

class Users extends React.Component {
    render() {
      let {name} = this.props;
      console.log(this.props)
      return (
        <html>
          <head />
          <body>
            <h1>TWEEDR</h1>
            <h3> {name} </h3>
            <form action="/users" method="post">
              
              <input type="Submit" value="Tweet"/>
            </form>
          </body>
        </html>
      );
    }
  }
  
  module.exports = Users;