import React from "react";
import Restaurants from "./Restaurants";
import restaurantsData from "../../data.json";

class Body extends React.Component {
  render() {
    const data = restaurantsData;
    //console.log(data);
    return (
      <div>
        {data.map((item, i) => {
          return <Restaurants key={i} lists={item} />;
        })}
      </div>
    );
  }
}

export default Body;
