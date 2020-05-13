var React = require('react');
var UserLayout = require('./userLayout');

class MyFollowers extends React.Component {

    render () {

        const followers = this.props.followers;
        // return the array of objects

        let allFollowers = followers.map(obj => {
            return <div class="following-container">
                <div class="profilePic-container">
                    <img src={obj.profile_pic} />
                </div>

                <div class="username-container">
                    {obj.username}
                </div>
            </div>


            }) // end of map
        return (<UserLayout>

            <h1>My Followers</h1>
            <div class="followingMain-container">
                {allFollowers}
            </div>

        </UserLayout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = MyFollowers;