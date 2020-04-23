const React = require("react");

import Head from '../page-components/head-component';
import Header from '../page-components/header-component';
import Nav from '../page-components/nav-component';

class SingleHashtag extends React.Component {

    render() {

        return (
            <html>
                <Head />
                <div className="overlay"></div>
                <body>
                    <Header />
                    <Nav />
                    <main>
                        <div className="single-song__container single-display">
                            <p className="single-hashtag__name">{this.props.singleHashtag.name}</p>
                            <div className ="hashtag__edit-delete-links">
                                <a href="./edit" className="hashtag__edit-link">Edit</a>
                                <a href="./delete" className="hashtag__delete-link">Delete Hashtag</a>
                            </div>
                        </div>
                    </main>
                </body>
            </html>
        );
    }
}

module.exports = SingleHashtag;