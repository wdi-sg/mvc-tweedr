var React = require("react");

class Login extends React.Component {
  render() {

    const addHashTag = (
                        <form action='/addhashtag' method='post'>
                            <input type='text' name="tag" placeholder='add a hashtag'></input><br></br>
                            <input type='submit' value='Add'></input>
                        </form>
                    )

    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="./css/hashtag.css" />
        </head>
        <body>
            <div>
                <h1>TWEEDR</h1>
            </div>
            <div>
                {addHashTag}
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Login;