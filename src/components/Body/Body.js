import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import FlightListingComponent from "./FlightListingComponent/FlightListingComponent";
import { MainBody } from "./Body.style";
import Autocomplete from "./AutoComplete/AutoComplete";

const API = "https://shireydeals.com/lkeen?";

class Body extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      flyFrom: null,
      to: null,
      sort: null,
      dateFrom: null,
      showDateFrom: null,
      dateTo: null,
      showDateTo: null,
      dtimefrom: null,
      dtimeto: null,
      passengers: 0,
      curr: "INR",
      selectedAirlines: null,
      selectedAirlinesExclude: true,
      flightData: null,
      isloading: false,
    };
  }

  getFlightDetails = () => {
    const { flyFrom, to, dateFrom, dateTo } = this.state;
    if (!flyFrom || !to || !dateFrom) {
      alert("Please enter data to search");
      return false;
    }
    this.setState({
      isloading: true,
    });
    fetch(
      `${API}flyFrom=${flyFrom}&to=${to}&limit=200&sort=duration&dateFrom=${dateFrom}&dtimefrom=00%3A01&dtimeto=23%3A55&passengers=1&curr=INR&selectedAirlines=&selectedAirlinesExclude=true`
    )
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          flightData: res.data,
          isloading: true,
        })
      );
  };

  journery = (destination, type) => {
    if (type === "from") {
      this.setState({
        flyFrom: destination,
      });
    } else if (type === "to") {
      this.setState({
        to: destination,
      });
    }
  };

  render() {
    const { flightData, isloading } = this.state;
    const availableFlights =
      (flightData && flightData.filter((item) => item.availability.seats)) ||
      "";
    // const data = restaurantsData;
    console.log(flightData);
    return (
      <MainBody>
        <Container fluid="lg" className="Search-container">
          <Row className="Search-header">
            <Col>
              <div className="text-center mb-3 mt-3">
                <div className="label">From</div>
                <Autocomplete
                  journery={this.journery}
                  type="from"
                  placeHolder="Starting Point"
                />
              </div>
            </Col>
            <Col>
              <div className="text-center mb-3 mt-3">
                <div className="label">To</div>
                <Autocomplete
                  journery={this.journery}
                  type="to"
                  placeHolder="Destination"
                />
              </div>
            </Col>
            <Col>
              <div className="text-center mb-3 mt-3">
                <div className="label">Departure</div>
                <DatePicker
                  selected={this.state.showDateFrom}
                  onChange={(date) => {
                    this.setState({
                      showDateFrom: date,
                      dateFrom: new Date(date).toLocaleDateString("en-GB"),
                    });
                  }}
                  className="calender dateFrom"
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Date of Journey"
                  selectsStart
                  startDate={this.state.showDateFrom}
                  endDate={this.state.showDateTo}
                />
              </div>
            </Col>
            <Col>
              <div className="text-center mb-3 mt-3">
                <div className="label">Return</div>
                <DatePicker
                  selected={this.state.showDateTo}
                  onChange={(date) => {
                    this.setState({
                      showDateTo: date,
                      dateTo: new Date(date).toLocaleDateString("en-GB"),
                    });
                  }}
                  className="calender dateTo"
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Date of return"
                  selectsEnd
                  startDate={this.state.showDateFrom}
                  endDate={this.state.showDateTo}
                  minDate={this.state.showDateFrom}
                />
              </div>
            </Col>
            <Col className="flex-center">
              <Button variant="primary" onClick={() => this.getFlightDetails()}>
                Search
              </Button>
            </Col>
          </Row>
        </Container>
        <Container>
          {availableFlights && availableFlights.length !== 0 && (
            <div className="Search-header">
              Total available flight found {availableFlights.length}
            </div>
          )}

          {availableFlights &&
            availableFlights.length !== 0 &&
            availableFlights.map((item, i) => {
              if (item.availability.seats) {
                return <FlightListingComponent key={i} lists={item} />;
              }
            })}
          {flightData && flightData.length === 0 && (
            <div className="Search-header">No flights found in this route</div>
          )}
          {!flightData && !isloading && (
            <div className="Search-header">Please search flights</div>
          )}
          {!flightData && isloading && (
            <div className="Search-header">Searching Flight Details ....</div>
          )}
        </Container>
      </MainBody>
    );
  }
}

export default Body;
