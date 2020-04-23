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

        const tweetInfo = this.props.allTweets.map(tweet =>

            <div className="single-tweet__container" key={tweet.id}>
                {displayTweetImg(tweet.img)}
                <a href={`./${tweet.id}`} className="single-tweet__id">{`Tweet: ${tweet.id}`}</a>
                <p className="single-tweet__content">{tweet.content}</p>
            </div>
        )

        return (
            <html>
                <Head />
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