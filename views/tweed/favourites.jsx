var React = require("react");

class Favourite extends React.Component {
  render() {
    // console.log('favourites.jsx')
    let userId = this.props.user_id;
    // let allTweeds = this.props.result;
    // console.log(allTweeds);

    // <button className="btn"> {tweed.id} </button>
    // const tweedsList = allTweeds.map((tweed) => {
    //     return (
    //         <li key={tweed.id}>
    //             <p>{tweed.user_id} {tweed.message}
    //                 <form action="/favourite" method="POST">
    //                     <input name="tweed_id" value={tweed.id} />
    //                     <input name="user_id" value={userId} />
    //                     <input type="submit" value="favourite" />
    //                 </form>
    //                 <button className="btn"> {tweed.id} </button>
    //             </p>
    //         </li>)
    // });

    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/style.css" />
        </head>
        <body>
            <div>
                <a href="/">Back to Home</a>
            </div>
            <h3>Tweedr Favourites</h3>
            <div className="favourite-list">
                <ul></ul>
            </div>
            <form action="/favourite" method="POST">
                <input name="tweed_id" />
                <input name="user_id" defaultValue={userId} readOnly/>
                <input type="submit" value="favourite" />
            </form>
            <p className="message-box"></p>
            <script src="/favourites.js"></script>
        </body>
      </html>
    );
  };
};
module.exports = Favourite;