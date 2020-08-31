var React = require("react");
var HEAD = require('../layouts/head.jsx');
var BODY = require('../layouts/body.jsx');
var NAVBAR =require('../layouts/navbar.jsx');

class Home extends React.Component {
  render() {

    let tweeds = this.props.tweeds.map (tweed => {
      return <div className={'profileTweed'}>
              <p> {tweed.tweed} </p>
              <span id={'profileUser'}>{tweed.username}</span><span id={'profileDate'}>{String(tweed.updated_at).slice(4,24)}</span>
            </div>
    });

    let followers = this.props.followers.map(follower => {
      return <li><a href={`/home/${follower.username}`}> {follower.username} </a></li>
    })

    return (
    	<html>
	    	<HEAD>
	    		<title> Tweedr Homepage: </title>
	    	</HEAD>
	    	<BODY>
          <NAVBAR username={this.props.tweeds[0].username} />
          <div className={'row'} id = {'mainBody'}>
            <div className={'col-8 offset-2'} id={'mainBar'}>
              <div className={'row'}>
                <div className={'col-3'} id = {'profileBox'}> 
                    <img src={this.props.tweeds[0].photo} id = {'profilePic'} />
                    <p>{this.props.tweeds[0].name}</p>  
                </div>
                <div className={'col-9'} id = {'mainAddTweed'}>
                  <form className={"form-inline"} method={'POST'} action={`/home/${this.props.tweeds[0].username}`}>
                    <input className={"form-control mr-sm-2"} type={"text"} placeholder={"Add Tweed"} aria-label={"Add Tweed"} name={'tweed'} />
                    <button className={"btn btn-dark btn-lg my-2 my-sm-0"} type={"submit"}>Add Tweed</button>
                  </form>
                </div>
                <div className={'col-4'} id={'mainFollowers'}>
                  <h1> People I follow </h1>
                  <ol>
                    {followers}
                  </ol>
                </div>
                <div className={'col-8'} id={'allMyTweeds'}>
                  <h1> My Latest Tweeds </h1>
                  <div>
                    {tweeds}
                  </div>
                </div>
              </div>
            </div>
          </div>
	       </BODY>
      </html>   
    );
  }
}

module.exports = Home;