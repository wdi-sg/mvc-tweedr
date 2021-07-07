var React = require("react");

class Head extends React.Component{
    render() {
        return(
            <html>
                <head>
                <meta charSet="utf-8"/>
                <title>TWEEEEEDR</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" href="/style.css"/>
            </head>
            </html>
        )
    }
}

class Aside extends React.Component{
    render(){
        return(
            <html>
                <div class="row login-page-left justify-content-center">
                    <section class="">
                    <h4>
                        <p>
                        Stuff to type about.
                        <br></br>
                        Things to rant about.
                        <br></br>
                        Type something about.
                        </p>
                    </h4>
                    </section>
                </div>
            </html>
        )
    }
}

class LoginForm extends React.Component{
    render(){
        return (
            <html>
                <div class="p-3 m-5">
                    <h2>Login with Existing Account</h2>
                    <div class="row pt-4 justify-content-center">
                        <form method="POST" action="/login">
                            <input type="text" class="p-3 ml-2 mr-1" name="username" placeholder="Username"/>
                            <input type="password" class="p-3 ml-1 mr-2" name="password" placeholder="Password"/>
                            <input type="submit" class="btn btn-outline-primary border border-primary btn-lg" value="Login"/>
                        </form>
                    </div>
                </div>
            </html>
        )
    }
}

class SignUp extends React.Component{
    render(){
        return (
            <html>
                <div class="p-3 m-5">
                    <h2>New?</h2>
                        <form method="GET" action="/register">
                            <div class="row justify-content-center">
                            <button type="submit" class="btn-success border border-primary btn-lg mt-3">Create An Account</button>
                        </div>
                    </form>
                </div>
            </html>
        )
    }
}

class Login extends React.Component {
    render(){

        return (
            <html>
                <Head/>
                <body>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-6 bg-primary">
                                <Aside/>
                            </div>
                            <div class="col-6  bg-light">
                                <LoginForm/>
                                <SignUp/>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Login;