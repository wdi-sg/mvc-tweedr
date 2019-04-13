var React = require('react');
var Layout = require('./layout');

class CreateTweed extends React.Component {

    render () {
        return (<Layout>

            <div class="new-header">
                <h1>Create Tweed</h1>
            </div>

            <div class="form-container">
                <form method="POST" action="/tweed">

                    <label for="tweed" />
                    <input type="text" class="form-control form-control-lg" name="tweets" placeholder="What are you thinking?" />

                    <button type="submit" class="btn btn-primary btn-lg float-right">Tweed</button>

                </form>
            </div>

        </Layout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = CreateTweed;