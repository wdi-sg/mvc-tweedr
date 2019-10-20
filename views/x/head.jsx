var React = require("react");

class Head extends React.Component {
    render(){
        return(
            <head>
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
              <link rel="stylesheet" href="/style.css"/>
            </head>
        )

    }
}

module.exports = Head;