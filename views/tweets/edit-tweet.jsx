const React = require("react");

import Head from '../page-components/head-component';
import Header from '../page-components/header-component';
import Nav from '../page-components/nav-component';

class EditTweetForm extends React.Component {

    render() {

        return (
            <html>
                <div className="overlay"></div>
                <Head />
                <script defer src="scripts/add-form.js" />
                <body>
                    <Header />
                    <Nav />
                    <main>
                        <div className="form__wrapper">
                            <form method="POST" action={`/tweets/${this.props.singleTweet.id}?_method=put`} className="edit-form">
                                <h2 className="edit-form__header">TWEET</h2>
                                <input type="text" name="content" defaultValue={this.props.singleTweet.content} maxlength="100"/>
                                <h3 className="edit-form__input-header">Image Link</h3>
                                <input type="text" name="img" defaultValue={this.props.singleTweet.img}/>
                                <button className="add-form__submit-btn" type="submit">Edit</button>
                            </form>
                        </div>
                    </main>
                </body>
            </html>
        );
    }
}

module.exports = EditTweetForm;