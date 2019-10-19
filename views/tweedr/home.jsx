var React = require("react");

class Home extends React.Component {
  render() {
      let list;
      if(this.props.result === null) {
          list= null
      } else {
        list = this.props.result.map(item => {
            return(
                <li>{item.tweet}</li>
            )
        })
      }
   
    return (
      <html>
        <head>
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          ></link>
        </head>
        <body>
          <h3>Home page  </h3>

          <form action="/addtweet" method="POST">
          <textarea type="text" name="tweet" placeholder="Write your tweet"/> <br/>
          <button className="btn btn-primary btn-lg" type="submit">Add Tweet</button>
          </form>
    
    <ul>
        {list}
    </ul>
        </body>
      </html>
    );
  }
}

module.exports = Home;
