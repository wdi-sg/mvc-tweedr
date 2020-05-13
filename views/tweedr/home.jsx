var React = require('react');
var Layout = require('./layout');

class Home extends React.Component {

    render () {

        const tweeds = this.props.tweeds;
        // return the array of objects

        let allTweeds = tweeds.map(obj => {
            return <li>{obj.tweeds}</li>


            }) // end of map
        return (<Layout>

            <h1>Home</h1>
            <div class="tweeds-container">
                <ul>
                    {allTweeds}
                </ul>
            </div>

        </Layout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = Home;