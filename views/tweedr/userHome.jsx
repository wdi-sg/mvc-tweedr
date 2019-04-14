var React = require('react');
var UserLayout = require('./userLayout');

class UserHome extends React.Component {

    render () {

        const tweeds = this.props.tweeds;
        // return the array of objects

        let allTweeds = tweeds.map(obj => {
            return <li>{obj.tweeds}</li>


            }) // end of map
        return (<UserLayout>

            <h1>Home</h1>
            <div class="tweeds-container">
                <ul>
                    {allTweeds}
                </ul>
            </div>

        </UserLayout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = UserHome;