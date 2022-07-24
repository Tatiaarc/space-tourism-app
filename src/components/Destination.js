import React from "react";
import "./Destination.css";
import data from "../data.json";

function Destination(props) {
  const [destinationValue, setDestination] = React.useState("Moon");

  const onClickButton = (event) => {
    setDestination(event.target.value);
  };

  console.log(destinationValue);
  let searched = [];

  searched = data.destinations.filter((d) => {
    return d.name.includes(destinationValue);
  });

  return (
    <div className="main">
      <div className="leftPanel">
        <div className="titleLeftPanel">
          <span className="numberLeftPanel">01 </span>
          <span className="textLeftPanel"> PICK YOUR DESTINATION</span>
        </div>
        <div className="planetImage">
          {searched.map((d) => (
            <img
              key={d.name}
              alt={"imagen"}
              // width={"400px"}
              src={require("../utils/space-tourism-website-main/starter-code/assets/destination/image-" +
                destinationValue.toLowerCase() +
                ".png")}
            />
          ))}
        </div>
      </div>
      <div className="rightPanel">
        <div className="buttonsGroupDestination">
          <button
            onClick={onClickButton}
            value="Moon"
            className="buttonDestination"
            style={{
              borderBottom:
                destinationValue === "Moon" ? "3px solid white" : "",
            }}
          >
            MOON
          </button>
          <button
            onClick={onClickButton}
            value="Mars"
            className="buttonDestination"
            style={{
              borderBottom:
                destinationValue === "Mars" ? "3px solid white" : "",
            }}
          >
            MARS
          </button>
          <button
            onClick={onClickButton}
            value="Europa"
            className="buttonDestination"
            style={{
              borderBottom:
                destinationValue === "Europa" ? "3px solid white" : "",
            }}
          >
            EUROPA
          </button>
          <button
            onClick={onClickButton}
            value="Titan"
            className="buttonDestination"
            style={{
              borderBottom:
                destinationValue === "Titan" ? "3px solid white" : "",
            }}
          >
            TITAN
          </button>

          <div className="textRightPanel">
            <h2>{searched.map((d) => d.name.toUpperCase())}</h2>
            <p>{searched.map((d) => d.description)}</p>
          </div>
          <div className="lineRightPanel"></div>
          <div className="distanteTravelPanel">
            <div className="distanteTravelInfo">
              <span>AVG. DISTANCE</span>
              <p>{searched.map((d) => d.distance)}</p>
            </div>
            <div className="distanteTravelInfo">
              <span>EST. TRAVEL TIME</span>
              <p>{searched.map((d) => d.travel.toUpperCase())}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Destination };
