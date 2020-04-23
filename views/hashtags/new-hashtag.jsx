var React = require("react");
var Main = require("../main-template");

class NewHt extends React.Component {
  render() {
    const newHt = (
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <h3>
              <u>Add New Hashtag</u>
            </h3>
            <br></br>
            <form method="POST" action="/hashtags/new">
              <input
                type="text"
                className="form-control"
                placeholder="Begin with a #!"
                name="tag"
              >
              </input>
              <br></br>
              <input className="btn btn-primary" type="submit" value="Submit" />
              <br></br>
            </form>
          </div>
        </div>
      </div>
    );

    return <Main children={newHt} />;
  }
}

module.exports = NewHt;
