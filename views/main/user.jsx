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

class User extends React.Component {
  render() {

    let message = "";

    if (this.props.tweeds == 0) {
        message = "Make your first tweed!";
    } else {
        message = "";
    }

    let tweeds = this.props.tweeds.map(tweed => {
        let link = `/users/${tweed.user_id}`;

        return <Cards content={tweed.content} profile_img={tweed.profile_img} name={tweed.name} profile_link={link}/>
    });




    let id = parseInt(this.props.user[0].id);
    let action = `/users/${id}`;


    return (
        <Layout>
              <h3>{this.props.user[0].name}</h3>

              {message}

              <form method="POST" action={action}>
                    <div class="form-group">
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Tweed something..." name="content" rows="3"></textarea>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>

            <div class="ml-lg-5 mr-lg-5">
                {tweeds}
            </div>
        </Layout>
    );
  }
}

module.exports = User;