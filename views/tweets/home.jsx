const React = require("react");
const Layout = require('../layout');
const Nav = require('../nav');

class New extends React.Component {
    render() {
        let cards = this.props.result.map(tweet=>{
            let {users_id,content,username,timestamp,tweets_id} = tweet;
            return (
                <div className="card border-secondary my-3" style={{width: "100%"}}>
                    <div className="card-body text-secondary">
                        <p className="card-text">{content}</p>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <div><a href={"/users/"+users_id}>{username}</a></div>
                        <div className="text-muted">{timestamp.toLocaleDateString() +" "+ timestamp.toLocaleTimeString()}</div>
                        <button type="submit" className="btn btn-primary" name={tweets_id} value="Like"/>
                    </div>
                </div>
            );
        })
        //
        return (
            <Layout>
                <Nav>
                    {this.props.req.cookies.username}
                </Nav>
                <div>
                {cards}
                </div>
            </Layout>
        );
    };
};

module.exports = New;