import React from "react";
import styled from "styled-components";

const MenuItem = styled.div``;

class Menu extends React.Component {
  menuitem = item => {
    return <MenuItem>{item}</MenuItem>;
  };
  render() {
    //console.log(data);
    const { menuList } = this.props;
    return (
      <div>
        {menuList.map(item => {
          return this.menuitem(item);
        })}
      </div>
    );
  }
}

export default Menu;
