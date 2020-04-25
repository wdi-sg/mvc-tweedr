const React = require("react");

class All_Users extends React.Component {
  render() {

    let userProfile = '/home/user/' + this.props.currentUserId;

    const allUsersList = this.props.allUsers.map(user => {
        let buttonId = 'followedUser' + user.id;
        let followedUserProfile = '/home/users/' + user.id
        return (<div style={{border:"1px solid gainsboro", borderRadius:"5px", padding:"5px", margin:"20px"}}>
                    <div className='row justify-content-center'>
                        <h4 className='text-center' name='username'>{user.username}</h4>
                    </div>
                    <br/>
                    <div className='row justify-content-center'>
                        <div className='col-6 justify-content-start'>
                            <button className='btn btn-primary'><a href={followedUserProfile} className='text-white text-decoration-none'>Profile</a></button>
                        </div>
                        <div className='col-6 justify-content-center'>
                            <button className='btn btn-info followButton' id={buttonId}>Follow</button>
                        </div>
                    </div>
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
                    <button className='btn btn-danger'><a href='/home/' className='text-white text-decoration-none'>Back to Home</a></button>
            </div>
            <script src='script.js'></script>
        </body>
      </html>
    );
  }
}

module.exports = All_Users;