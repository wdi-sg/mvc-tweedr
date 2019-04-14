var React = require('react');
var UserLayout = require('./userLayout');

class MyFollowing extends React.Component {

    render () {

        const following = this.props.following;
        // return the array of objects

        let allFollowing = following.map(obj => {
            return <li>{obj.username}</li>


            }) // end of map
        return (<UserLayout>

            <h1>People I Follow</h1>
            <div class="tweeds-container">
                <ul>
                    {allFollowing}
                </ul>
            </div>

        </UserLayout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = MyFollowing;