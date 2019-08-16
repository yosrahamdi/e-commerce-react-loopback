import React, { Component } from "react";
import { Navbar} from "react-bootstrap";


class Header extends Component {
 
  render() {
    return (
      <Navbar >
          <Navbar.Brand>
            <a href="#admin">{this.props.brandText}</a>
          </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
