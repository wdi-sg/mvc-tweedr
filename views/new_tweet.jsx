const React = require("react");

class New_Tweet extends React.Component {
  render() {

    const allHashtags = this.props.hashtags.map(hashtag => {
        return (<option>{hashtag.hashtag}</option>)
    })

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossOrigin="anonymous"/>
        </head>
        <body>
            <div className='container'>
                <br/>
                <h2 className='text-center'>New Tweet</h2>
            </div>
            <br/>
            <div className='row justify-content-center'>
                <form method='POST' action='/home/tweet'>
                    <h5 className='text-center'>Write a Tweet!</h5>
                    <div className='row justify-content-center'>
                        <input type='text' name='tweet' style={{width:"300px", height:"100px"}}/>
                    </div>
                    <br/>
                    <h5 className='text-center'>Add a hashtag</h5>
                    <div className='row justify-content-center'>
                        <select name='hashtag'>
                            <option></option>
                            {allHashtags}
                        </select>
                    </div>
                    <br/><br/>
                    <div className='row justify-content-center'>
                        <input type='submit' value='Submit' className='btn btn-primary'/>
                    </div>
                    <br/>
                    <div className='row justify-content-center'>
                        <button className='btn btn-danger'><a href='/home/' className='text-white text-decoration-none'>Back to Home</a></button>
                    </div>
                </form>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = New_Tweet;