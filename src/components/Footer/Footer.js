import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <span>408-603-6257</span>
        <span><a href="mailti:coleaniblett@gmail.com">coleaniblett@gmail.com</a></span>
        <span><a href="https://github.com/coleaniblett">github.com/coleaniblett</a></span>
      </footer>
    );
  }
}

export default Footer;