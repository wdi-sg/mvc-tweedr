var React = require('react');

class TweetBar extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form method="POST" action="/newtweet?_method=POST" accept-charset="UTF-8">
                            <div className="input-group">
                                <input type="text" name="tweetmsg"  placeholder="tweet here" className="form-control"/>
                                <span className="input-group-btn">
                                <input type="submit" name="commit" value="Submit" className="btn btn-dark"/>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = TweetBar;
