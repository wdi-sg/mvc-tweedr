const React = require("react");
const Layout = require('../layout');
const Nav = require('../nav');

class Index extends React.Component {
    render() {
        if (this.props.result === null) {
            var visibility = "invisible";
            var content = this.props.result;
        } else if (typeof this.props.result[0].sum === 'string') {
            var visibility = "invisible";
            var {sum} = this.props.result[0]
            var content = (<h1>{sum}</h1>);
        } else {
            var visibility = "visible";
            var content = this.props.result.map((payment,index)=>{
                let {id,sender_id,recipient_id,amount} = payment;
                return (
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{sender_id}</td>
                        <td>{recipient_id}</td>
                        <td>{amount}</td>
                    </tr>
                );
            });
            console.log(content);
        };
        return (
            <Layout>
                <Nav>
                    {this.props.req.cookies.username}
                </Nav>
                <div className="jumbotron">
                    <h1 className="display-1">Welcome to <span className="text-primary">Tweedr Pay</span></h1>
                    <div className="d-flex justify-content-between">
                        <a href="/payments/payouts"><button type="button" className="btn btn-info">Your Payments</button></a>
                        <a href="/payments/received"><button type="button" className="btn btn-dark">Received Payments</button></a>
                        <a href="/payments/totalout"><button type="button" className="btn btn-primary">Total Payments</button></a>
                        <a href="/payments/totalin"><button type="button" className="btn btn-secondary">Received Total</button></a>
                    </div>
                    <div className="jumbotron">
                        <table className={"table table-striped "+visibility}>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Sender</th>
                                    <th scope="col">Receiver</th>
                                    <th scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {content}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Layout>
        );
    };
};

module.exports = Index;