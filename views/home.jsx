var React = require("react");
var Main = require("./main-template");

class Home extends React.Component {
  render() {
    const Home = (
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <h1><u>TWEEDR</u></h1>
            <br></br>
          </div>
        </div>
      </div>
    );

    return <Main children={Home}/>;
  }
}

module.exports = Home;