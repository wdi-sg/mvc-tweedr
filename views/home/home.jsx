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

class NavBar extends React.Component{
    render(){
        return(
            <html>
                <nav class="navbar navbar-dark bg-dark">
                    <div>
                        <a class="navbar-brand" href="#">TWEEEEEDR</a>
                    </div>
                </nav>
            </html>
        )
    }
}

class LeftSidebar extends React.Component{
    render(){

        // console.log('VIEW RIGHTSIDE!!!')
        // console.log(this.props.data);

        return(
            <aside>
                <figure>
                    <h4>User Profile</h4>
                </figure>
            </aside>
        )
    }
}

class RightSidebar extends React.Component{
    render(){


        return(
            <aside>
                <figure>
                    <h4>Other Users</h4>
                </figure>
            </aside>
        )
    }
}

class ViewTweeds extends React.Component{
    render(){
        // console.log('VIEW TWEEDSSS!!!')
        // console.log(this.props);
        const tweedsAll = this.props.data.resultTweeds;

        let outList = tweedsAll.map((item,index)=>{
            return  <div class="content tweeds-box">
                        <div class="text-container">
                            <p class="text text-left">{item.tweeds}</p>
                        </div>
                    </div>
        })
        return(
            <html>
                {outList}
            </html>
        )
    }
}

class Home extends React.Component {
    render(){

        console.log('home JSX');
        console.log(this.props.data);

        return (
            <html>
                <Head/>
                <body>

                    <main>

                        <div class="container">
                            <NavBar/>
                            <div class="row">
                                <div class="col-3">
                                    <LeftSidebar data={this.props.data}/>
                                </div>
                                <div class="col-6">
                                    <ViewTweeds data={this.props.data}/>
                                </div>
                                <div class="col-3">
                                    <RightSidebar/>
                                </div>
                            </div>
                        </div>
                    </main>
                </body>
            </html>
        );
    }
}

module.exports = Home;