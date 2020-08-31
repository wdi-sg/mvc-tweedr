var React = require("react");

export default class SideBarOptions extends React.Component {
  render() {
    const body = {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        margin: '0',
    };
    const icons = {
        width: '40px',
        padding: '20px',
    };
    const text = {
        fontSize: '20px',
    };
    return (
        <div>
            <div style={body}>
                <div style={icons}><this.props.Icon /></div>
                <div style={text}>{this.props.text}</div>
            </div>
        </div>
    )
  }
};