var React = require("react");

class tweet extends React.Component {
  render() {

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                </head>
                <body>
                    <h1>Tweet something</h1>
                    <form method="POST" action="/tweet">
                        <input type="text" name="tweet"/><br/>
                        <input type="submit" value="Submit"/><br/>
                    </form>
                </body>
            </html>
        );
    }
}


module.exports = tweet;