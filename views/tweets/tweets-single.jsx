const React = require("react");

import Head from '../page-components/head-component';
import Header from '../page-components/header-component';
import Nav from '../page-components/nav-component';

class SingleTweet extends React.Component {

    render() {

        const displayTweetImg = () => {
            if (this.props.singleTweet.img) {
                return (
                    <div className="single-song__img-container single-display">
                    <img src={`http://a3.mzstatic.com/us/r30/Features/d6/ba/99/dj.homcvzwl.60x60-50.jpg`} alt={this.props.singleTweet.img} className="single-song__img"/>
                </div>
                )
            } else {
                return;
            }
        }

        return (
            <html>
                <Head />
                <div className="overlay"></div>
                <body>
                    <Header />
                    <Nav />
                    <main>
                        <div className="single-tweet__container single-display">
                            {displayTweetImg()}
                            <p className="single-tweet__content">"{this.props.singleTweet.content}"</p>
                            <div className ="tweet__edit-delete-links">
                                <a href="./edit" className="tweet__edit-link">Edit</a>
                                <a href="./delete" className="tweet__delete-link">Delete Tweet</a>
                            </div>
                        </div>
                    </main>
                </body>
            </html>
        );
    }
}

module.exports = SingleTweet;