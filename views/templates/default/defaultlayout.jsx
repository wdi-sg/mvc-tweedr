var React = require("react");

class DefaultLayout extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
        <head />
        <body>
          <div className="container">
            {this.props.children}
          </div>
        </body>
      </html>
    )
  }
}

module.exports = DefaultLayout;
