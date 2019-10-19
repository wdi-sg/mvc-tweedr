const React = require("react");

class New extends React.Component {
    render() {
        return (
            <form method="POST" action="/new">
                <div>
                    <label>Keep it within 70 characters!</label>
                </div>
                <div>
                    <textarea maxLength="70" name="content" rows="5" cols="33" required/>
                </div>
                <input type="submit" value="Tweet!"/>
            </form>
        );
    };
};

module.exports = New;