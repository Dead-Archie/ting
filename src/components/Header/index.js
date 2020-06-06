import React from "react";
import logo from "../../logo.svg";
import withStyles from "../../HOC/withstyle";
import headerStyle from "./index.style";
import styled from "styled-components";

const Nav = styled.div`
  height: 40px;
  padding-bottom: 10px;
  border-bottom: 13px solid #fdf6f6;
`;

const Img = styled.img`
  width: 40px;
  height: 50px;
  float: left;
`;

const Company = styled.div`
  margin-top: 13px;
  color: #a23d5d;
  font-size: 20px;
`;

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
