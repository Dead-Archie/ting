import React, { Component } from "react";
import { AutocompleteContainer } from "./AutoComplete.style";
import AIRPORTSDATA from "../../../Airports.json";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
class Autocomplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: "",
    };
  }

  // Event fired when the input value is changed
  onChange = (e) => {
    const suggestions = AIRPORTSDATA;

    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions =
      userInput.length > 2 &&
      suggestions.filter((suggestion) => {
        return (
          suggestion.city.toLowerCase().indexOf(userInput.toLowerCase()) > -1 ||
          suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1 ||
          suggestion.country.toLowerCase().indexOf(userInput.toLowerCase()) >
            -1 ||
          suggestion.IATA.toLowerCase() === userInput.toLowerCase()
        );
      });

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value,
    });
  };

  // Event fired when the user clicks on a suggestion
  onClick = (value) => {
    const { journery, type } = this.props;
    // Update the user input and reset the rest of the state
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: value,
    });
    journery(value, type);
  };

  // Event fired when the user presses a key down
  onKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
      });
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
      },
    } = this;
    const { placeHolder } = this.props;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return index < 6 ? (
                <li
                  className={className}
                  key={suggestion.IATA}
                  onClick={() => onClick(suggestion.IATA)}
                >
                  <Row>
                    <Col md={9}>
                      <p className="suggested-city">
                        {suggestion.city}, {suggestion.country}
                      </p>
                      <p className="suggested-Airport greyText">
                        {suggestion.name}
                      </p>
                    </Col>
                    <Col md={3}>
                      <p className="suggested-IATA greyText">
                        <b>{suggestion.IATA}</b>{" "}
                      </p>
                    </Col>
                  </Row>
                </li>
              ) : null;
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <AutocompleteContainer>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
          placeholder={placeHolder}
        />
        {suggestionsListComponent}
      </AutocompleteContainer>
    );
  }
}

export default Autocomplete;
