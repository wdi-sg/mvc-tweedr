var React = require("react");
var DefaultLayout = require('../layouts/default');
var NavLayout = require('../layouts/navigation');
class LoginPage extends React.Component {
  render() {
    return (
        <DefaultLayout title="Tweet">
        <NavLayout></NavLayout>
        <div className="container h-100">
    <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6">
<form className="mt-5" method="POST" action="/tweet">
  <div className="form-group">
    <div className="d-flex flex-row">
    <input type="text" className="form-control" name="message"/>
    <button type="submit" className="btn btn-primary btn-customized ml-2">Tweet</button>
    </div>
    </div>
    </form>
    </div>
    </div>
    </div>
        </DefaultLayout>
    );
  }
}

module.exports =LoginPage;