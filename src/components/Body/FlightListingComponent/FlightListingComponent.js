import React from "react";
import logo from "../../../logo.svg";
import Menu from "../FlightBookingComponent/FlightBookingComponent";
import {
  Container,
  Img,
  Ratings,
  Description,
  Resturant,
} from "./FlightListingComponent.style";

class Restaurants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDesc: false,
      menu: props.lists.foods.split(","),
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
