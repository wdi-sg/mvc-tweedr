var React = require("react");
const Layout = require("./layout");

class Register extends React.Component {
    render() {
        // console.log(this.props.types);
        return (
        <html>
        <head />
        <body>
            <Layout/>
            <form action="/register-done" method="POST">
                Name: <input type="text" name="name" placeholder="Insert Name"></input>
                <br></br>
                Password: <input type="text" name="password" placeholder="Insert Password"></input>
                <br></br>
                <input type="submit" value="Submit"></input>
            </form>
        </body>
      </html>
        );
    }
}

module.exports = Register;