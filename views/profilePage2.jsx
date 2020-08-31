var React = require("react");
import Sidebar from "./sidebar";
import Feed from "./feed2";
import Sidebar2 from './sidebar2';
export default class Index extends React.Component {
  render() {
    const page = {
        margin: '0',
    }
    const body = {
        margin: '0',
        display: 'flex',
    }
    const sidebar = {
        height: '100vh',
        fontWeight: 'bold',
        borderRight: '2px solid lightgrey',
        flex: '0.2',
        paddingLeft: '150px',
    }
    const feed = {
        flex: '0.5',
    }
    const sidebar2 = {
        flex: '0.3',
        borderLeft: '2px solid lightgrey',
    }
    return (
        <html>
            <body style={page}>
                <div style={body}>
                  <div style={sidebar}><Sidebar/></div>
                  <div style={feed}><Feed object={this.props}/></div>
                  <div style={sidebar2}><Sidebar2 /></div>
                </div>
            </body>
        </html>
    )
  }
};