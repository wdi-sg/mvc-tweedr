var React = require("react");

class Tweet extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head>
        </head>
        <body>
          <h3>Login</h3>
          <form action = "/login" method="POST">
                  <div class="form-group">
                    <label>Username</label>
                    <input name="name" type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label>Text</label>
                    <input name="text" type="text" class="form-control" placeholder="Password"/>
                  </div>
                  
                  <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </body>
      </html>
    );
  }
}

module.exports = Tweet;
