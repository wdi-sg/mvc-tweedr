var React = require('react');

class User extends React.Component {

  render() {

    let person = this.props.rows

    let tweeds = person.map( item => {
        return <p>{item.tweet}</p>
    })
    console.log(person);
    // console.log(tweeds);

    return (
              <html>
                <body>
                    <div>
                        {tweeds}
                    </div>
                    
                </body>
              </html>
    );
  }
}

module.exports = User;
