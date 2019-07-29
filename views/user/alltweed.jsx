var React = require("react");
var HEAD = require('../layouts/head.jsx');
var BODY = require('../layouts/body.jsx');
var NAVBAR =require('../layouts/navbar.jsx');

class AllTweed extends React.Component {
  render() {

    let tweeds = this.props.tweeds.map (tweed => {
      return <div className={'allTweed'}>
              <p> {tweed.tweed} </p>
              <span id={'allUser'}>{this.props.username}</span>
              <a href={`/home/${this.props.username}/alltweeds/${tweed.id}`}>Edit/Delete</a>
              <span id={'allDate'}>{String(tweed.updated_at).slice(4,24)}</span>
            </div>
    });

    return (
    	<html>
	    	<HEAD>
	    		<title> Tweedr Homepage: </title>
	    	</HEAD>
	    	<BODY>
          <NAVBAR username={this.props.username}/>
          <div className={'row'} id = {'mainBody'}>
            <div className={'col-8 offset-2'} id={'mainBar'}>
                <h1> My Latest Tweeds </h1>
                <div>
                    {tweeds}
                </div>
            </div>
          </div>
	       </BODY>
      </html>   
    );
  }
}

module.exports = AllTweed;