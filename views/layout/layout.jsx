var React = require("react");

class Layout extends React.Component {
  render() {


    return (
      <html>
            <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>

            </head>
            <body>

                <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navBarSearch">
                    <a class="navbar-brand" href="/">Tweedr</a>
                </nav>

                <div class="row d-flex m-5">
                    <div class="col-12">

                            {this.props.children}

                    </div>
                </div>

            </body>
        </html>
    );
  }
}

module.exports = Layout;