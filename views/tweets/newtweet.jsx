var React = require("react");

class Newtweet extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
            <div>
                <h1>Enter the following to tweet!!</h1>
                <div>
                    <form action='/newtweet' method="POST">
                        <p>
                            Tweet Body!: <input name="tweet"/>
                        </p>

                        <input type="submit" value="Tweet!!"></input>
                    </form>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Newtweet;