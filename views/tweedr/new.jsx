var React = require("react");

class NewTweed extends React.Component {
    render() {
        const allHashtags = this.props.allHashtags;

        const options = allHashtags.map(hashtag => {
            return <option>{hashtag.content}</option>;
        });

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css"/>
                </head>
                <body>
                    <h3>New Tweed</h3>
                    <form method='POST' action='/tweeds'>
                        <h4>Message</h4>
                        <input type='textarea' name='content'/>
                        <br/><br/>
                        <h4>Hashtags</h4>
                        <select className="selectpicker" multiple data-live-search="true" name="hashtags">
                        {options}
                        </select>
                        <br/><br/>
                        <input type='submit' value='Submit'/>
                    </form>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.bundle.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"></script>
                </body>
            </html>
            );
    }
}

module.exports = NewTweed;