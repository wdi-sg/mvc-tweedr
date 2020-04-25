var React = require("react");
var Main = require("../main-template");

class NewTweet extends React.Component {
  render() {
    let htArr = this.props.htArr;
    let htArrHtml = htArr.map((element) => {
      return (
        <div className="ml-4 form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="hashtag"
            value={element.id}
          />
          <label>{element.tag}</label>
        </div>
      );
    });

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
              ></textarea>
              <br></br>
              <h5>Select Relevant Hashtags:</h5>
              {htArrHtml}
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
