
const React = require("react");
// const Layout = require('./layout');

class Tweed extends React.Component {
    render() {


        // let fail = ""
        // if (this.props.fail === "No entry"){
        //     fail =  <h3 style = {{color:"red"}}>Log in failed. Please try again.</h3>
        // }

        return (
            <div>

                <h1>MAKE YOURSELF HEARD</h1>
                <h2>Tweed something intelligent.</h2>

                <form method="POST" action="/tweed">
                    <div className="form-group">
                        <label>Your tweed: </label>
                        <input className="form-control form-control-lg" type="text" placeholder="your tweed" name="tweed" maxLength = "20" required/>
                    </div>

                    <input type="submit" className="btn btn-primary" value="Submit"/>
                </form>
            </div>

        );
    };
};

module.exports = Tweed;