const React = require("react");

class Block extends React.Component {
  render() {

    let tweets = this.props.tweets;

    let tweetsArr = tweets.map((tweet,i)=>{
        return (
            <div>
                <p>{i+1}. {tweet.detail}</p>
            </div>
        )
    })


    return (

        <div>
            {tweetsArr}
        </div>

    );

  }
}

module.exports = Block;