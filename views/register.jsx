
const React = require("react");
// const Layout = require('./layout');

class Register extends React.Component {
    render() {

        let fail = ""
        if (this.props.fail === true){
            fail =  <h3 style = {{color:"red"}}>Username has been taken. Please try another one!</h3>
        }

        return (
            <div>

                <h1>WELCOME TO tweedr.</h1>

                <h2> Please register!</h2>
                <form method="POST" action="/register">
                    <div className="form-group">
                        <label>Username: </label>
                        <input className="form-control form-control-lg" type="text" placeholder="username" name="username" required/>
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input className="form-control form-control-lg" type="text" placeholder="password" name="password" required/>
                    </div>

                    <input type="submit" className="btn btn-primary" value="Submit"/>
                </form>
                 <br/>
                <h3>{fail}</h3>
            </div>

        );
    };
};

module.exports = Register;