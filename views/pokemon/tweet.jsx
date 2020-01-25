var React = require("react");

class Tweet extends React.Component {
  render() {
    
    return (
      <html>
        <head>
        </head>
        <body>
          <h3>Write a Tweet</h3>
          <form action = {`/login/${this.props.id}/tweet`} method="POST">
                  <div className="form-group">
                    <label>{this.props.name}</label>
                  </div>
                  <div className="form-group">
                    <label>Tweet</label>
                    <input name="tweet" type="text" className="form-control"/>
                  </div>          
                  <button type="submit" className="btn btn-primary">Submit Tweet</button>
            </form>
        </body>
      </html>
    );
  }
}

module.exports = Tweet;
