var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    let logoutElement;

    if (this.props.login === "true") {
        logoutElement = <div className="logout"><a href="/logout">Logout</a></div>;
    } else {
        logoutElement = <div className="logout"></div>;
    }

    return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
                    <link rel="stylesheet" href="/css/style.css"/>
                </head>

                <body>
                    <div className="nav">
                        <div className="logo">Tweedr</div>
                        { logoutElement }
                    </div>

                    {this.props.children}

                    <script src="/js/script.js"></script>
                </body>
            </html>
    );
  }
}

module.exports = DefaultLayout;