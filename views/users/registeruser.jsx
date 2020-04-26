var React = require("react");
 class RegisterUser extends React.Component {
     render() {
         return (
            <html>
                <title>Register New Account</title>
                <h3>Register New Account</h3>
                <form action="/register" method="POST">
                    <div>
                        <p>Name</p>
                        <p><input type = "text" name = "name"/></p>
                    </div>
                    <div>
                        <p>Password</p>
                        <p><input type = "text" name = "password"/></p>
                    </div>

                     <input type='submit' value='Submit'/>
                 </form>
            </html>
                 )
   }
 }

 module.exports = RegisterUser;