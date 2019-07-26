var React = require("react");
var Default = require("./layout/default");

class Followers extends React.Component {

  render() {
    let followers = this.props.result===null?"":this.props.result.map(x=>{
        let url = '/tweedr/'+x.id
        return <li><a href={url}>{x.name}</a></li>
    })
    return (
      <Default title={this.props.title} cookieLogin={this.props.cookieLogin} cookieUser={this.props.cookieUser} cookieUserId={this.props.cookieUserId}>
        <h2>{this.props.cookieUser}'s followers:</h2>
        <ul>
            {followers}
        </ul>

      </Default>
    );
  }
}

module.exports = Followers;
