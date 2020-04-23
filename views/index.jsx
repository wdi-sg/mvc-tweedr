
const React = require("react");

class Index extends React.Component {
  render() {
    const tweeds_list = this.props.tweeds;


      const pastTweedsLst = tweeds_list.map(obj => {
          return <li>{obj.content}</li>
      })

      const latestTweeds = function(tweeds_list){
        if (tweeds_list){
          return <li>{tweeds_list[tweeds_list.length-1].content}</li>
        } else {
          return <li>No Tweets</li>
        }
      }

      const latestTweedsLst = latestTweeds(tweeds_list);


    return (

      <html className="h-100">
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        </head>
        <body className="h-100 bg-secondary">
          <h1 className="font-weight-bold text-center mt-5">Tweedr</h1>
            <div className="container text-center mt-5">
              <p>
              Make a Tweed:
              <form action="/create" method="POST">
                <input type="text" name="content" id=""/>
                <input type="submit" value="Tweed!"/>
              </form>
              </p>
              <h3 className="mt-5 font-weight-bold">Latest Tweed:</h3>
                <ul className="list-unstyled">
                  {latestTweedsLst}
                </ul>
              <p>
              <h3 className="mt-5 font-weight-bold">Past Tweeds:</h3>
                <ul className="list-unstyled">
                  {pastTweedsLst}
                </ul>
              </p>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Index;
