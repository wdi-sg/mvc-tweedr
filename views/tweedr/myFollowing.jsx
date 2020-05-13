var React = require('react');
var UserLayout = require('./userLayout');

class MyFollowing extends React.Component {

    render () {

        const following = this.props.following;
        // return the array of objects

        let allFollowing = following.map(obj => {
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

            <h1>People I Follow</h1>
            <div class="followingMain-container">
                {allFollowing}
            </div>

        </UserLayout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = MyFollowing;