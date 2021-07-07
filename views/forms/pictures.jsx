
var React = require('react');

class Pictures extends React.Component {
  render() {
    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css?family=Lora|Roboto&display=swap" rel="stylesheet"></link>
        </head>
        <body style={{backgroundImage : 'url("https://www.bestfunforall.com/better/imgs/Cutie%20wallpaper%20%2017.jpg")', backgroundPosition : "center", backgroundRepeat : "no-repeat", backgroundSize : "cover", height : "100vh", backgroundAttachment : "fixed"}}>

        <div className = "container mx-auto">
        <h1 className="text-center my-5 text-black" style={{fontFamily : "Lora, serif"}}>Please upload some pictures!</h1>

            <form action="/pictures" method="POST" className = "text-black">
              <div className="form-group">
                <label htmlFor="inputUsername">Background URL</label>
                <input type="text" name="background_url" className="form-control" id="inputBackground" aria-describedby="emailHelp" />
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword">Profile Pic URL</label>
                <input type="text" name="profile_url" className="form-control" id="inputProfilePic" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Pictures;