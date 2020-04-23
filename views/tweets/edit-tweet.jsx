const React = require("react");

import Head from '../page-components/head-component';
import Header from '../page-components/header-component';
import Nav from '../page-components/nav-component';

class EditTweetForm extends React.Component {

    render() {


        const hashtagOptions = this.props.allHashtags.map(hashtag => <option value={hashtag.name} hashtag-id={hashtag.id}>{hashtag.name}</option>)

        const hashtagSelects = this.props.hashtags.map(hashtag =>
            <select id="hashtags-select" name="hashtag" defaultValue={hashtag}>
                    {hashtagOptions}
                </select>
        )

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
                            {displayInvalidMsg()}
                            <form method="POST" action={`/tweets/${this.props.singleTweet.id}?_method=put`} className="edit-form">
                                <h2 className="edit-form__header">TWEET</h2>
                                <input type="text" name="content" defaultValue={this.props.singleTweet.content} maxlength="100"/>
                                <h3 className="edit-form__input-header">Image Link</h3>
                                <input type="text" name="img" defaultValue={this.props.singleTweet.img}/>
                                {hashtagSelects}
                                <button className="edit-form__submit-btn" type="submit">Edit</button>
                            </form>
                        </div>
                    </main>
                </body>
            </html>
        );
    }
}

module.exports = EditTweetForm;