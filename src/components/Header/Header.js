import React from "react";
import logo from "../../logo.svg";
import withStyles from "../../HOC/withstyle";
import headerStyle from "./Header.style";
import { Nav, Img } from "./Header.style";

class Header extends React.Component {
  render() {
    return (
      <Nav>
        <Img src={logo} className="App-logo" alt="logo" />
        {/* <Company>Foody</Company> */}
      </Nav>
    );
  }
}

export default withStyles(Header, headerStyle);
