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

class NewAccountSuccess extends React.Component {
    render(){
        console.log('IN SUCCESS JSX!!!!!!');
        console.log(this.props.resultAdd.rows[0]);
        const user = this.props.resultAdd.rows[0].username;

        return (
            <html>
                <Head/>
                <body>
                    <div class="container">
                        <div class="row">
                            <div class="col-2">
                            </div>
                            <div class="col-8">
                                <h2>Welcome {user}</h2>
                                <section>
                                    <a href="/home">
                                        <h4>Start TWEEDBING</h4>
                                    </a>
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

module.exports = NewAccountSuccess;