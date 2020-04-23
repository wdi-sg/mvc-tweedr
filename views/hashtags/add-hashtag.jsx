const React = require("react");

import Head from '../page-components/head-component';
import Header from '../page-components/header-component';
import Nav from '../page-components/nav-component';

class AddHashtag extends React.Component {

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
                <body>
                    <Header />
                    <Nav />
                    <main>
                        <div className="form__wrapper">
                            <form method="POST" action={`/hashtags`} className="add-form">
                                {displayInvalidMsg()}
                                <h2 className="add-form__header">ADD HASHTAG</h2>
                                <input type="text" name="name" placeholder="Hashtag goes here" maxlength="100"/>
                                <button className="add-form__submit-btn" type="submit">Add</button>
                            </form>
                        </div>
                    </main>
                </body>
            </html>
        );
    }
}

module.exports = AddHashtag;