const React = require('react');

export default class Profile extends React.Component {
    render(){
        let username = this.props.data[0].username;
        let id = this.props.data[0].id;
        let url = `/followed/${id}`;

        let arrayTweet = this.props.data;
        let tweetList = arrayTweet.map(tweet => {
            return <li>{tweet.post}</li>
        })

        return (
        <html>
        <head>

        </head>
        <body>
          <div>
            <h1>USER PROFILE {username}</h1>
            <h2>Tweeds:</h2>
            <ul>{tweetList}</ul>

                <form action={url} method ="POST">

                  <br/>
                  <br/>
                  <p>Click to follow this user</p>

                  <input type="submit" value ="follow"/>
                  </form>




          </div>

        </body>
      </html>
            );
    }
}