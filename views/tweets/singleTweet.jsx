var React = require("react");

class singlehash extends React.Component {
  render() {
    console.log(this.props);
    const tweet = this.props.tweets.tweets.tweetstext;


        const user=this.props.tweets.users.map(user=>
        {
            console.log(user);
            const url="/user/"+user.user_id;
            return <div class={"col-12 mt-2 text-center"}>
            <p>User: <a href={url}>{user.name}</a></p>
            </div>



        });
        const hash=this.props.tweets.hash.map(hash=>
        {
            console.log(hash);
            const url="/hash/"+hash.hash_id;
            return <div class={"col-12 mt-2 text-center"}>
            <p><a href={url}>{hash.hashtext}</a></p>
            </div>



        });
    //console.log(this.props.types);
    return (
      <html>
        <head />
        <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"} integrity={"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"} crossorigin={"anonymous"}></link>
        <body>




          <div class={"container mt-3 mb-5"}>
                        <div class={"row align-bottom border"}>
            <div class={"col-12 mt-5 text-center"}>
            <h1  class={"mt-3"}>Tweet: {tweet}</h1>
            </div>
            </div>
            <div class={"row mt-5"}>
                {user}
            </div>
            <div class={"row mt-5"}>
                {hash}
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = singlehash;