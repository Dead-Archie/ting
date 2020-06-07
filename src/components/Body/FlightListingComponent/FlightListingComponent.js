import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Button, Image } from "react-bootstrap";
import { FlightDetails } from "./FlightListingComponent.style";
import airlinesData from "../../../data.json";

class FlightListingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDesc: false,
    };
  }

  getAirLineName = (id) => {
    const airlineName = airlinesData.filter(
      (airline) => airline.shortName === id && airline.useage === "Y"
    );
    return airlineName[0].name;
  };

  descriptions = () => {
    const { lists } = this.props;
    const {
      airlines,
      dTimeUTC,
      aTimeUTC,
      cityFrom,
      cityCodeFrom,
      cityTo,
      cityCodeTo,
      fly_duration,
      countryFrom: { name: countryFromName },
      countryTo: { name: countryToName },
      price,
      route,
    } = lists;
    return (
      <Col>
        <Row className="top-aligned-row">
          <Col xs={3} className="text-center">
            <Row>
              {airlines &&
                airlines.map((airline) => (
                  <Col>
                    <Image
                      src={`https://goibibo.ibcdn.com/images/v2/carrierImages/${airline}.gif`}
                      className="ui fluid rounded image airline-logo"
                    />
                    <p className="fli-code">{this.getAirLineName(airline)}</p>
                  </Col>
                ))}
            </Row>
          </Col>
          <Col xs={7} className="text-center">
            <Row>
              <Col className="text-center">
                <div>
                  {new Date(dTimeUTC * 1000).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </div>
                <div>
                  {cityFrom}, {countryFromName}
                  <b> ({cityCodeFrom})</b>
                </div>
              </Col>
              <Col className="text-center">
                <div>
                  {new Date(aTimeUTC * 1000).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </div>
                <div>
                  {cityTo}, {countryToName}
                  <b> ({cityCodeTo})</b>
                </div>
              </Col>
            </Row>
            <div title="Departure" className="flightDurationAndStops">
              <div>
                <b> {new Date(dTimeUTC * 1000).toDateString("en-US")}</b>
                <FontAwesomeIcon icon={faClock} className="side-margin-5" />
                {fly_duration}
              </div>
              <p className="fli-stops-seperator"></p>
              <div className="text-center">
                {route &&
                  route.map((direction, index) => {
                    return (
                      <span className="fli-code">
                        {index === 0 ? cityFrom : direction.cityTo}
                        {index !== route.length - 1 ? <span> | </span> : null}
                      </span>
                    );
                  })}
              </div>
            </div>
          </Col>

          <Col xs={1} className="flex-bottom">
            <div className="price-section">
              <span>
                <b>
                  <FontAwesomeIcon icon={faRupeeSign} />
                  {price}
                </b>
              </span>
              {/* <strike>$82</strike> */}
            </div>
          </Col>
          <Col xs={1} className="flex-bottom">
            <div className="price-section">
              {/* <button className="ui blue small button rounded" role="button"> */}
              <Button variant="primary">Book</Button>
            </div>
          </Col>
        </Row>
      </Col>
    );
  };

  render() {
    return (
      <FlightDetails>
        <Row>{this.descriptions()}</Row>
      </FlightDetails>
    );
  }
}

export default FlightListingComponent;
