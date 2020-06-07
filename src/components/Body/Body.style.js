import styled from "styled-components";

export const MainBody = styled.div`
  .flex-end {
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
  .text-center {
    text-align: center;
  }
  input[type="text"] {
    padding: 5px;
  }
  .Search-header {
    position: relative;
    border-radius: 0.285714285714286rem;
    padding: 1rem 0px 1rem 1rem;
    -webkit-transition-duration: 0.285714285714286s;
    transition-duration: 0.285714285714286s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    background: #fff;
    margin-bottom: 1em;
    border: 1px solid #ebebeb;
    margin-top: 1rem;
    box-shadow: -5px 30px 55px #bbb;
  }
  .label {
    text-align: left;
    margin-left: 6px;
    color: #008cff;
    font-weight: 900;
    font-size: 18px;
  }
`;
