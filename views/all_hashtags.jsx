const React = require("react");

class All_Hashtags extends React.Component {
  render() {

    const allHashtags = this.props.hashtags.map(hashtag => {
        let hashtagPage = '/home/hashtag/' + hashtag.id;
        return (<li><a href={hashtagPage}>{hashtag.hashtag}</a></li>)
    })

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossOrigin="anonymous"/>
        </head>
        <body>
            <div className='container'>
                <br/>
                <h2 className='text-center'>All Hashtags</h2>
                <br/>
                <div className='row justify-content-center'>
                    <button className='btn btn-danger'><a href='/home' className='text-white text-decoration-none'>Back to Home</a></button>
                </div>
                <br/>
                <div className='row justify-content-center'>
                    <ul>
                        {allHashtags}
                    </ul>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = All_Hashtags;