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

class Fail extends React.Component {
    render(){

        return (
            <html>
                <Head/>
                <body>
                    <div class="container">
                        <div class="row">
                            <div class="col-2">
                            </div>
                            <div class="col-8">
                                <h2>Login Failure</h2>
                                <section>
                                        <h4>Login Details are wrong!</h4>
                                        <a href="/login">
                                        <h4>Please click on the link to try again.</h4>
                                        </a>
                                        <h4>Create an account if you do not have one.</h4>
                                </section>
                            </div>
                            <div class="col-2">
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Fail;