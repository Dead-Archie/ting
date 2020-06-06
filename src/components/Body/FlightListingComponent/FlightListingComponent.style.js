import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 10px;
  border-bottom: 5px solid #fdf6f6;
  display: flex;
`;

export const Img = styled.img`
  flex-basis: 10%;
  width: 100px;
  height: 100px;
`;

export const Ratings = styled.div`
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

export const Resturant = styled.div`
  flex-basis: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  height: {
    ${(props) => (props.getHeight ? "200px" : "auto")}
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
