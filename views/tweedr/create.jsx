const React = require('react');

class Create extends React.Component {
  render(){
    const list = this.props.result.map(tweed  => {
     return (
       <div>
          <p>Tweed Id: {tweed.id} </p>
          <p>message: {tweed.message}</p>
       </div>
     );
    })
    return(
      <html>
        <body>
          <h1>Tweeded!</h1>
          {list}
        </body>
      </html>
    )
  }
}

module.exports = Create;