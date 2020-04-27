const React = require("react");

import Head from '../page-components/head-component';
import Header from '../page-components/header-component';
import Nav from '../page-components/nav-component';

class AllHashtags extends React.Component {

    render() {

        const hashtagInfo = this.props.allHashtags.map(hashtag =>

            <div className="single-hashtag__container" key={hashtag.id}>
                <a href={`./${hashtag.id}`} className="single-hashtag__id">{`#`}</a>
                <p className="single-hashtag__name">{hashtag.name}</p>
            </div>
        )

        return (
            <html>
                <Head />
                <body>
                    <Header />
                    <Nav />
                    <main>
                        {hashtagInfo}
                        <a href="./new">Add New Hashtag</a>
                    </main>
                </body>
            </html>
        );
    }
}

module.exports = AllHashtags;