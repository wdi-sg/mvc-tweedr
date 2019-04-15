var React = require("react");
var Layout = require('../layout/layout.jsx');

class Cards extends React.Component {
    render() {


        return (
                <div class="card h-100 m-5">
                    <div class="row">
                        <div class="col-2">
                            <img class="card-img-top" src={this.props.profile_img} alt="" style={{height: '7rem', width: '7rem', objectFit: 'cover'}}/>
                        </div>
                        <div class="col-9">
                            <div class="card-body">
                                <div class="text-decoration-none text-dark">
                                    <a href={this.props.profile_link}><h4 class="card-title">@{this.props.name}</h4></a>
                                </div>
                                <div class="text-decoration-none text-dark">
                                    <h4 class="card-title">{this.props.content}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>



        );
    }
}

module.exports = Cards;

class Home extends React.Component {
  render() {



    let tweeds = this.props.tweeds.map(tweed => {

         let link = `/users/${tweed.user_id}`;

        return <Cards content={tweed.content} profile_img={tweed.profile_img} name={tweed.name} profile_link={link}/>
    });


    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>

            </head>
            <body>

                <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navBarSearch">
                    <a class="navbar-brand" href="/">Tweedr</a>
                    <a class="nav-link" href="/login">Log In</a>
                    <a class="nav-link" href="/register">Sign Up</a>
                </nav>

                    <div class="ml-lg-5 mr-lg-5">
                        <p>{tweeds}</p>
                    </div>

            </body>
        </html>
    );
  }
}



module.exports = Home;