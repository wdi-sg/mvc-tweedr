var React = require("react");

class All_Users extends React.Component {
  render() {

    let userProfile = '/home/user/' * this.props.currentUserId;

    console.log(this.props.allUsers)
    const allUsersList = this.props.allUsers.map(user => {
        return (<div style={{width:"200px", marginBottom:"20px"}}>
                    <form action={userProfile} method='POST'>
                        <h6 name='userId'>ID: {user.id}</h6>
                        <h6 name='username'>Name: {user.username}</h6>
                        <input type='submit' value='Follow' className='btn btn-info'/>
                    </form>
                </div>)
    })

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossOrigin="anonymous"/>
        </head>
        <body>
            <div className='container'>
                <br/>
                <h2 className='text-center'>List of all Tweeders</h2>
            </div>
            <br/>
            <div className='row justify-content-center'>
                {allUsersList}
            </div>
            <br/><br/>
            <div className='row justify-content-center'>
                    <button className='btn btn-primary'><a href='/home/' className='text-white text-decoration-none'>Back to Home</a></button>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = All_Users;