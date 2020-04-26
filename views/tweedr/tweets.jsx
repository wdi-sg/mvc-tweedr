var React = require('react');

class Tweets extends React.Component {
  render() {

    return (
      <html>
        <body>
          <div>
            <h1>Your Tweets</h1>
            <div>
                <form action="/tweets" method="POST">
                    <p>
                        Message <input name="message"/>
                        <input type="submit"/>
                    </p>
                </form>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Tweets;
