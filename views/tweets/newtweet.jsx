var React = require("react");

class Newtweet extends React.Component {
  render() {
    var hashTags = this.props.hashTags.map (hashys =>{
        return <option value = {hashys.id}> {hashys.hashtag}</option>
    })
    return (
      <html>
        <head />
        <body>
            <div>
                <h1>Enter the following to tweet!!</h1>
                <div>
                    <form action='/newtweet' method="POST">
                        <p>
                            Tweet Body!: <input name="tweet"/>
                        </p>
                        <br></br>
                        <p>
                            Please select a hashtag!
                        </p>
                            <select name ='hashtagName'>
                                <option value = 'none'>none</option>
                                {hashTags}
                            </select>
                        <br></br>
                        <br></br>
                        <input type="submit" value="Tweet!!"></input>
                    </form>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Newtweet;