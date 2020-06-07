import styled from "styled-components";

export const AutocompleteContainer = styled.div`
  .flex-bottom {
    align-items: center;
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
  .Search-container {
    padding: 20px;
  }
  .no-suggestions {
    color: #999;
    padding: 0.5rem;
  }

  .suggestions {
    border: 1px solid #ebebeb;
    border-top-width: 0;
    list-style: none;
    margin-top: 0;
    max-height: 200px;
    overflow-y: auto;
    padding-left: 0;
    min-width: 300px;

    z-index: 1;
    background: white;
    position: absolute;
  }

  .suggestions li {
    padding: 5px 10px;
    margin-bottom: 5px;
    cursor: pointer;
  }

  .suggestion-active,
  .suggestions li:hover {
    background-color: #f2f2f2;
    cursor: pointer;
  }

  .suggestions li:not(:last-of-type) {
    border-bottom: 1px solid #ebebeb;
  }
  .suggested-city {
    font-size: 14px;
    line-height: 14px;
    color: #000;
    text-align: left;
  }
  .suggested-Airport {
    font-size: 12px;
    line-height: 12px;
    text-align: left;
  }
  .greyText {
    color: #9b9b9b;
  }
`;
