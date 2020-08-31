var React = require("react");
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default class Tweetbox extends React.Component {
  render() {
    const div = {
        padding: '20px',
        borderBottom: '2px solid lightgrey'
    }
    const form = {
        display: 'flex',
        flexDirection: 'column',
    }
    const text = {
        border: 'none',
        width: '600px',
        borderBottom: '1px solid lightgrey',
        wordWrap: 'break-word',
        height: '60px',
    }
    const icon = {
        width: '70px',
    }
    const button = {
        justifyContent: 'flex-end',
        border: 'none',
        color: 'white',
        fontWeight: '900',
        fontSize: '16px',
        padding: '10px',
        width: '150px',
        backgroundColor: '#00acee',
        borderRadius: '30px',
        marginLeft: 'auto'
    }
    const inputField = {
        display: 'flex',
        alignItems: 'center'
    }
    return (
        <div style={div}>
            <form style={form} method='POST' action='/tweets?_method=put'>
                <div style={inputField}>
                    <div style={icon}> <AccountCircleIcon /> </div>
                    <input style={text} type="text" name="tweet"placeholder="Whats happening?"/>
                </div>
                    <input style={button}type="submit" value="Tweet"/>
            </form>
        </div>
    )
  }
};