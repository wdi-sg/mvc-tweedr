const React = require("react");

import Head from '../page-components/head-component';
import Header from '../page-components/header-component';
import Nav from '../page-components/nav-component';

class EditHashtagForm extends React.Component {

    render() {

        return (
            <html>
                <div className="overlay"></div>
                <Head />
                <body>
                    <Header />
                    <Nav />
                    <main>
                        <div className="form__wrapper">
                            <form method="POST" action={`/hashtags/${this.props.singleHashtag.id}?_method=put`} className="edit-form">
                                <h2 className="edit-form__header">HASHTAG</h2>
                                <input type="text" name="name" defaultValue={this.props.singleHashtag.name} maxlength="100"/>
                                <button className="edit-form__submit-btn" type="submit">Edit</button>
                            </form>
                        </div>
                    </main>
                </body>
            </html>
        );
    }
}

module.exports = EditHashtagForm;