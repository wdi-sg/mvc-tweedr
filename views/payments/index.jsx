var React = require('react');
var Layout = require('../defaultlayout');

class Payments extends React.Component {
	render() {
        console.log("printing this shit", this.props);

        //paymentInfo: [ '7', '9', '9' ], -> something is wrong because it is not saving as an object
        const payments = this.props.paymentInfo.map(el => {
            return (
                <div class="alert alert-info" role="alert">
                sououooojo
                </div>
            )
        })
		return (
			<Layout>
                <div className='text-center'>

                <h3 className='m-2 display-1'> All payments </h3>
                <div className="container col-5">
                    {payments}
                </div>
                </div>
			</Layout>
		);
	}
}

module.exports = Payments;
