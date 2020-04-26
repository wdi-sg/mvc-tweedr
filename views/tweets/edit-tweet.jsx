const React = require("react");

import Head from '../page-components/head-component';
import Header from '../page-components/header-component';
import Nav from '../page-components/nav-component';

class EditTweetForm extends React.Component {

    render() {


        const hashtagOptions = this.props.allHashtags.map(hashtag => <option value={hashtag.name} hashtag-id={hashtag.id} className="hashtag-option">{hashtag.name}</option>)


        const hashtagListItems = this.props.hashtags
            .map(hashtag =>
                <div className="edit-form__hashtag-wrapper">
                    <li data-hashtag-tweet-id={hashtag.id} className="edit-form__hashtags-list-item">
                        #{hashtag.name}
                    </li>
                    <button type="button" data-hashtag-tweet-id={hashtag.id} data-tweet-id={this.props.singleTweet.id} data-hashtag-id={hashtag['hashtag_id']} className="edit-form__hashtags-list-item-delete-btn">Delete</button>
                </div>
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
                <script defer src="./scripts/edit-tweet.js"></script>
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
                                <div className="edit-form__hashtags-list">
                                    <select className="edit-form__hashtags-list-select">
                                        {hashtagOptions}
                                    </select>
                                    <button type="button" data-tweet-id={this.props.singleTweet.id} className="edit-form__hashtags-list-add-btn">
                                    Add Hashtag</button>
                                    {hashtagListItems}
                                </div>
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