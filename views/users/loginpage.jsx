var React = require("react");

 class LoginInPage extends React.Component {
     render() {
         return (
            <html>
                <title>Login To  Account</title>
                <h3>Login To  Account</h3>
                <form action="/login" method="POST">
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


 module.exports = LoginInPage;