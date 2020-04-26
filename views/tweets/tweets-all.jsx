const React = require("react");

import Head from '../page-components/head-component';
import Header from '../page-components/header-component';
import Nav from '../page-components/nav-component';

class AllTweets extends React.Component {

    render() {

        const displayTweetImg = (img) => {
            if (img) {
                return (<div className="single-tweet__img-container">
                            <img src={tweet.img} className="single-tweet__img"/>
                        </div>);
            } else {
                return;
            }
        }

        const makeListOfHashtags = (tweetId) => {

            this.props.allHashtags
                .reduce((list, hashtag) => {
                    if (hashtag['tweet_id'] == tweetId) {
                        list.push(
                            <li className="single-tweet__hashtag">hashtag.name</li>
                        )
                    }

                    return list;
                }, [])
        }

        const displayFavouriteBtn = (id) => {
            const userFavourite = this.props.userFavourites.find(el => el['tweet_id'] == id);
            if (userFavourite) {
                return (<button data-tweet-id={id} data-favourite-id={userFavourite.id} data-is-favourite={true} className="single-tweet__favourite-btn">UNFAVOURITE THIS</button>)
            } else {
                return (<button data-tweet-id={id} data-is-favourite={false} className="single-tweet__favourite-btn">FAVOURITE THIS</button>)
            }
        }

        const tweetInfo = this.props.allTweets
            .map(tweet =>

                <div className="single-tweet__container" key={tweet.id}>
                {displayTweetImg(tweet.img)}
                <a href={`./${tweet.id}`} className="single-tweet__id">{`Tweet: ${tweet.id}`}</a>
                <p className="single-tweet__content">{tweet.content}</p>
                <ul className="single-tweet__hashtag-list">{makeListOfHashtags(tweet.id)}</ul>
                {displayFavouriteBtn(tweet.id)}
            </div>
            )

        return (
            <html>
                <Head />
                <script defer src="./scripts/tweets-all.js"></script>
                <body>
                    <Header />
                    <Nav />
                    <main>
                        {tweetInfo}
                    </main>
                </body>
            </html>
        );
    }
}

module.exports = AllTweets;