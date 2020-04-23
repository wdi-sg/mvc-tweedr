var React = require("react");

class addhashtags extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
            <div>
                <h1>Enter the following to tweet!!</h1>
                <div>
                    <form action='/newhash' method="POST">
                        <p>
                            Add a new Hashtag!!: <input name="hashtag"/>
                        </p>
                        <br></br>

                        <input type="submit" value="Tweet!!"></input>
                    </form>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = addhashtags;