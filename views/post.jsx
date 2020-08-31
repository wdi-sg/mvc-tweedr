var React = require("react");

export default class Post extends React.Component {
  render() {
    const postComponent = {
        width: "inherit",
        border: '1px solid lightgrey',
        margin: '5px',
        borderRadius: '10px',
        padding: '10px'
    }
    const user = {
        color: 'grey',
        paddingBottom: '10px'
    }

    return (
            <div style={postComponent}>
                <div style={user}>@{this.props.userhandle}</div>
                <div>{this.props.tweets}</div>
            </div>
    )
  }
};