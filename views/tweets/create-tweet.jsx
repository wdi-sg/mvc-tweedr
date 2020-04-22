const React = require("react");

import Head from '../page-components/head-component';
import Header from '../page-components/header-component';
import Nav from '../page-components/nav-component';

class CreateTweetForm extends React.Component {

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
                            <form method="POST" action={`/artists`} className="add-form">
                                <h2 className="add-form__header">TWEET</h2>
                                <input type="text" name="name" placeholder="Name" maxLength="25" />
                                <input type="text" name="content" placeholder="Tweet goes here" maxlength="100"/>
                                <input type="text" name="img" placeholder="Upload Image Link" />
                                <button className="add-form__submit-btn" type="submit">Add</button>
                            </form>
                        </div>
                    </main>
                </body>
            </html>
        );
    }
}

module.exports = CreateTweetForm;