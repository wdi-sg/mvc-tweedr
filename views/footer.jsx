const React = require("react");

class Footer extends React.Component {
  render() {
    const author = "TWEEDR";
    const year = "2020";
    const authorUrl = "http://github.com/rachellesg";
    return (
      <footer>
        <a href={authorUrl}>Rachelle</a>  |  
          &copy; {author} {year}
      </footer>
    );
  }
}

module.exports = Footer;