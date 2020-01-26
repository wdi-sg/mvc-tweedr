var React = require("react");

class UserPage extends React.Component {
  render() {
      var option = this.props.users.map(user => {
          return <form action="/" method="POST"><button type="submit" class="btn btn-primary">{user.name} {user.id}</button></form>
      })
    return (
      <html>
        <head>
           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/> 
        </head>
        <body>
          <h3>Tweets</h3>
          {option}
        </body>
      </html>
    );
  }
}

module.exports = UserPage;
