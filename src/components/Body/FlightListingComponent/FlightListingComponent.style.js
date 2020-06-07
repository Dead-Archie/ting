import styled from "styled-components";

export const Description = styled.div`
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

export const FlightDetails = styled.span`
  display: block;
  position: relative;
  border-radius: 0.285714285714286rem;
  padding: 1rem 0px 1rem 1rem;
  transition-duration: 0.285714285714286s;
  transition-timing-function: ease-out;
  background: #fff;
  margin-bottom: 1em;
  border: 1px solid #ebebeb;

  overflow: hidden;
  margin-top: 1rem;

  &:hover {
    box-shadow: -5px 30px 55px #bbb;
    border: 1px solid #fff;
    z-index: 1;
  }

  .flightDurationAndStops {
    text-align: center;
  }
  .top-aligned-row {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: inherit;
    justify-content: inherit;
    -ms-flex-align: stretch;
    align-items: stretch;
    width: 100% !important;
    padding: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .text-center {
    text-align: center;
  }
  .flightDurationAndStops {
    background: none #fff;
    border: 1px solid rgba(34, 36, 38, 0.15);
    color: rgba(0, 0, 0, 0.87);
    box-shadow: none;
    margin-top: 1em;
    text-align: center;
    font-size: 0.78571429rem;
    display: inline-block;
    line-height: 1;
    vertical-align: baseline;
    margin: 0 0.14285714em;
    background-color: #e8e8e8;
    background-image: none;
    padding: 0.5833em 0.833em;
    color: rgba(0, 0, 0, 0.6);
    text-transform: none;
    font-weight: 700;
    border: 0 solid transparent;
    border-radius: 0.28571429rem;
    transition: background 0.1s ease;
    margin: 14px;
  }
  .side-margin-5 {
    margin: 0px 5px;
  }
  .flex-bottom {
    align-items: flex-end;
    justify-content: flex-end;
    display: flex;
    flex-wrap: wrap;
  }
  .flex-center {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  }
  .fli-stops-seperator {
    border-top: 2px solid #979797;
    margin: 10px auto;
  }
  .fli-code {
    color: #878787;
    font-size: 11px;
  }
`;
