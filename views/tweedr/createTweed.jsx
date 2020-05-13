var React = require('react');
var UserLayout = require('./userLayout');

class CreateTweed extends React.Component {

    render () {
        return (<UserLayout>

            <div class="new-header">
                <h1>Create Tweed</h1>
            </div>

            <div class="form-container">
                <form method="POST" action="/tweed">

                    <label for="tweed" />
                    <input type="text" class="form-control form-control-lg" name="tweed" placeholder="What are you thinking?" />

                    <button type="submit" class="btn btn-primary btn-lg float-right">Tweed</button>

                </form>
            </div>

        </UserLayout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = CreateTweed;