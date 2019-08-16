import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
       
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
              E-Commerce, made with love for a better experience
          </p>
       
      </footer>
    );
  }
}

export default Footer;
