import React from "react";
import { Container } from "react-bootstrap";
import FlightListingComponent from "./FlightListingComponent/FlightListingComponent";

const API = "https://shireydeals.com/lkeen?";

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flyFrom: null,
      to: null,
      sort: null,
      dateFrom: null,
      dateTo: null,
      dtimefrom: null,
      dtimeto: null,
      passengers: 0,
      curr: "INR",
      selectedAirlines: null,
      selectedAirlinesExclude: true,
      flightData: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://shireydeals.com/lkeen?flyFrom=DEL&to=BOM&limit=200&sort=duration&dateFrom=13%2F06%2F2020&dateTo=13%2F06%2F2020&dtimefrom=00%3A01&dtimeto=23%3A55&passengers=1&curr=INR&selectedAirlines=&selectedAirlinesExclude=true"
    )
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          flightData: res.data,
        })
      );
  }

  render() {
    const { flightData } = this.state;
    // const data = restaurantsData;
    console.log(flightData);
    return (
      <Container md>
        {flightData.map((item, i) => {
          return <FlightListingComponent key={i} lists={item} />;
        })}
      </Container>
    );
  }
}

export default Body;
