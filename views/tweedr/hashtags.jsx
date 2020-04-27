var React = require('react');

class Hashtags extends React.Component {
  render() {

    return (
      <html>
        <body>
          <div>
            <h1>Hashtags</h1>
            <div>
                <form action="/hashtags" method="POST">
                    <p>
                        Enter you hashtag <input name="content"/>
                    </p>
                    <p>

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

module.exports = Hashtags;
