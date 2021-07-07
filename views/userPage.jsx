var React = require("react");
var AllTweets = require('./allTweets.jsx')

import Button from 'react-bootstrap/Button';

class UserPage extends React.Component {
  render() {
      var option = this.props.users.map(user => {
          return <div class="form-check"><input class="form-check-input" type="checkbox" name="options" value={user.id} />
             Follow {user.name}
            </div>        
      })
    return (  
      <html>
        <head>
           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/> 
        </head>
        <body>
          <h3>Tweets</h3>
          <form action="/" method="POST">
          
          {option} 

         
          
            <button type="submit">Submit</button>
          </form>

        </body>
      </html>
    );
  }
}

module.exports = UserPage;
