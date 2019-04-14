var React = require("react");
var Layout = require("./layout");

class Register extends React.Component {
    render() {
        console.log(this.props.types);
        return (<Layout>
            <h3>Hello, you are working on the tweedr app</h3>
            <h2>This is the new user registration page</h2>
            
        </Layout>);
    }
}

module.exports = Register;
