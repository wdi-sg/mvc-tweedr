var React = require("react");
import Tweetbox from './tweetbox';
import Post from './post';
export default class Feed extends React.Component {
  render() {
        let posts = this.props.object
        const feed = {
            minWidth: 'fit-content',
            borderBottom: '2px solid lightgrey',
            overflowY: 'scroll'
        }
        const feedHeader = {
            position: 'sticky',
            padding: '15px 20px',
            margin: '0',
        }
    return (
        <div>
            <div style={feed}>
                <h2 style={feedHeader}>HOME</h2>
            </div>
            <Tweetbox />
            {posts.rows.map(post => (
                <Post
                userhandle={post.userhandle}
                tweets={post.tweets}/>
            ))}
        </div>
    )
  }
};