import React from "react";
import logo from "../../../logo.svg";
import styled from "styled-components";
import Menu from "../Menu";

const Container = styled.div`
  padding-bottom: 10px;
  border-bottom: 5px solid #fdf6f6;
  display: flex;
`;

const Img = styled.img`
  flex-basis: 10%;
  width: 100px;
  height: 100px;
`;

const Ratings = styled.div`
  width: 80px;
  height: 40px;
  border-radius: 0.28571429rem;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  line-height: 39px;
  background: #5ba829;
  border-color: #5ba829 !important;
  text-align: center;
`;

const Description = styled.div`
  height: 300px;
  flex-basis: 80%;
  display: flex;
  flex-direction: column;

  div {
    margin: 10px 0px;
  }
  div.contact {
    color: red;
    font-size: 16px;
  }
  div.name {
    background: 0 0;
    color: #616469;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
  }
  div.food {
    color: #a29d9d;
    font-size: 14px;
  }
`;

const Resturant = styled.div`
  flex-basis: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  height: {
    ${props => (props.getHeight ? "200px" : "auto")}
  }
  div.contact {
    color: red;
    font-size: 16px;
  }
  div.name {
    background: 0 0;
    color: #616469;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
  }
  div.food {
    color: #a29d9d;
    font-size: 14px;
  }
`;

class Restaurants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDesc: false,
      menu: props.lists.foods.split(",")
    };
  }
  companyLogo = () => {
    return <Img src={logo} className="App-logo" alt="logo" />;
  };
  ratings = () => {
    const { ratings } = this.props.lists;
    return <Ratings>{ratings}/5</Ratings>;
  };

  showDescription = () => {
    const { description } = this.props.lists;
    return <div>{description}</div>;
  };
  descriptions = () => {
    const { restaurant, contact, foods, address, locality } = this.props.lists;
    const { showDesc, menu } = this.state;
    return showDesc ? (
      <Description onClick={() => this.setState({ showDesc: false })}>
        <div className="name">{restaurant}</div>
        <div className="contact">{`${contact} | ${address}, ${locality}`}</div>
        {this.showDescription()}
        <Menu menuList={menu} />
      </Description>
    ) : (
      <Resturant onClick={() => this.setState({ showDesc: true })}>
        <div className="name">{restaurant}</div>
        <div className="contact">{`${contact} | ${address}, ${locality}`}</div>
        <div className="food">{foods}</div>
      </Resturant>
    );
  };

  render() {
    return (
      <Container>
        {this.companyLogo()}
        {this.descriptions()}
        {this.ratings()}
      </Container>
    );
  }
}

export default Restaurants;
