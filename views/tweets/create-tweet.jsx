const React = require("react");

import Head from '../page-components/head-component';
import Header from '../page-components/header-component';
import Nav from '../page-components/nav-component';

class CreateTweetForm extends React.Component {

    render() {

        const displayInvalidMsg = () => {

            if (this.props.invalidMsg) {
                return (
                    <div className="invalid-msg__wrapper">
                        <p className="invalid-msg">{this.props.invalidMsg}</p>
                    </div>
                )

            } else {
                return;
            }

        }

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
                            <form method="POST" action={`/tweets`} className="add-form">
                                {displayInvalidMsg()}
                                <h2 className="add-form__header">TWEET</h2>
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