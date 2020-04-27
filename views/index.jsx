
const React = require("react");

class Index extends React.Component {
  render() {
    const tweeds_lst = this.props.tweeds;
    const hashtag_lst = this.props.hashtags;

      const pastTweedsLst = tweeds_lst.map(obj => {
          return <li>{obj.content} <button id="fav" value={obj.content}>fav</button></li>
      })

      const latestTweeds = function(tweeds_lst){
        if (tweeds_lst){
          return <li>{tweeds_lst[tweeds_lst.length-1].content}</li>
        } else {
          return <li>No Tweets</li>
        }
      }

      const allHashtags = hashtag_lst.map(obj => {
        return (<span className="m-2">
                  <input type="checkbox" name="hashtag" value={obj.hashtag}/>
                  <label htmlFor={obj.hashtag}>{obj.hashtag}</label>
                </span>
                )

      })

      const latestTweedsLst = latestTweeds(tweeds_lst);






    return (

      <html className="h-100">
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
        </head>
        <body className="h-100 bg-secondary">
          <h1 className="font-weight-bold text-center mt-5">Tweedr</h1>
            <div className="container text-center mt-5">
              <p>
              Make a Tweed:
              <form action="/create" method="POST">
                <input type="text" name="content" id=""/>
                <input type="submit" value="Tweed!"/>
                <div>{allHashtags}</div>
              </form>
              </p>
              <p>
              Add a hashtag or select from checkerboxes:
              <form action="/hashtag" method="POST">
                <input type="text" name="hashtag" id=""/>
                <input type="submit" value="Add"/>
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
            <script src="/script.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Index;
