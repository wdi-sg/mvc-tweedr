const React = require('react');

class UserHomepage extends React.Component {
    render() {
            let tweedInfo = this.props.rows;
            let tweeds = tweedInfo.map(tweed => {
                return <li>{tweed.tweet}</li>
            })

        return(
            <html>
                <body>
                    <h1>Welcome to {tweedInfo[0].username}'s Tweedr</h1>
                    <div>
                        <ul>
                            {tweeds}
                        </ul>
                    </div>
                    <form method="GET" action="/login">
                        <input type="submit" value="Log Out"/>
                    </form>    
                </body>
            </html>
        );
    }
}

module.exports = UserHomepage;