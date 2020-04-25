var React = require("react");
var Main = require("../main-template");

class DisplayAllHt extends React.Component {
  render() {
    let htArr = this.props.htArr;
    let link = "/hashtags";

    let htArrHtml = htArr.map((element) => {
      let link2 = "/hashtags/" + element.id;
      return (
        <li>
          <a href={link2}>{element.tag}</a>
        </li>
      );
    });

    const displayAllHt = (
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <form method="GET" action={link}>
              <h3>
                <u>All Hashtags</u>
              </h3>
              <br></br>

              <ul>{htArrHtml}</ul>

              <br></br>
            </form>
          </div>
        </div>
      </div>
    );

    return <Main children={displayAllHt} />;
  }
}

module.exports = DisplayAllHt;
