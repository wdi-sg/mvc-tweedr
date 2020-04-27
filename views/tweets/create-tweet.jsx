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

        const hashtagOptions = this.props.allHashtags.map(hashtag => <option value={hashtag.name} hashtag-id={hashtag.id}>{hashtag.name}</option>)

        return (
            <html>
                <div className="overlay"></div>
                <Head />
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
                                <div className="add-form__add-hashtag-wrapper">
                                    <button type="button" className="add-form__add-hashtag-btn">Add Hashtag</button>
                                    <button type="button" className="add-form__delete-hashtag-btn">Delete Hashtag</button>
                                    <select className="hashtags-select" name="hashtag">
                                        {hashtagOptions}
                                    </select>


                                </div>
                                <button className="add-form__submit-btn" type="submit">Tweet!</button>
                            </form>
                        </div>
                    </main>
                </body>
                <script defer src="./scripts/create-tweet.js"></script>
            </html>
        );
    }
}

module.exports = CreateTweetForm;