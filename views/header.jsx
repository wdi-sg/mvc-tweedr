var React = require('react');

class Header extends React.Component {
    render(){
        return (
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
                <link href="https://fonts.googleapis.com/css?family=Cinzel|Quattrocento" rel="stylesheet"/>
                <link rel="stylesheet" href="/style.css"></link>
                <link rel="shortcut icon" href="images/fruits.png" type="images/fruits.png"/>
                <title>Tweedr</title>
            </head>
        );
    }
}

module.exports = Header;