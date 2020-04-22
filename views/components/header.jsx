import React from "react";

class Head extends React.Component {
  render() {
    return (
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="/style.css"/>
        <title>Tweedr</title>
      </head>
    );
  }
}

export default Head;