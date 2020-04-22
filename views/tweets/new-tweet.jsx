var React = require("react");
var Main = require("../main-template");

class NewTweet extends React.Component {
  render() {
    const newTweet = (
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <h3>
              <u>Add New Tweet</u>
            </h3>
            <br></br>
            <form method="POST" action="/tweets/new">
              <textarea
                type="text"
                className="form-control"
                rows="3"
                placeholder="Tweet Here!"
                name="content"
              >
              </textarea>
              <br></br>
              <input className="btn btn-primary" type="submit" value="Submit" />
              <br></br>
            </form>
          </div>
        </div>
      </div>
    );

    return <Main children={newTweet} />;
  }
}

module.exports = NewTweet;
