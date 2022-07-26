import React from "react";
// import "./Crew.css";
import data from "../data.json";

function Crew() {
  const [crewValue, setCrewValue] = React.useState("Douglas Hurley");

  const onClickButton = (event) => {
    setCrewValue(event.target.value);
  };

  let searched = [];

  searched = data.crew.filter((d) => {
    return d.name.includes(crewValue);
  });

  let nameImage = searched.map((d) => d.name.toLowerCase().replace(" ", "-"));

  console.log(nameImage);
  return (
    <div className="main">
      <div className="leftPanel crew">
        <div className="titleLeftPanel">
          <span className="numberLeftPanel">02 </span>
          <span className="textLeftPanel"> MEET YOUR CREW</span>
        </div>
        <div className="textLeftPanel description">
          <h4>{searched.map((d) => d.role.toUpperCase())}</h4>
          <h3>{searched.map((d) => d.name.toUpperCase())}</h3>
          <p>{searched.map((d) => d.bio)}</p>
        </div>
        <div className="buttonsGroupCrew">
          <button
            onClick={onClickButton}
            value="Douglas Hurley"
            className="buttonCrew"
            style={{
              backgroundColor: crewValue === "Douglas Hurley" ? "white" : "",
            }}
          ></button>
          <button
            onClick={onClickButton}
            value="Mark Shuttleworth"
            className="buttonCrew"
            style={{
              backgroundColor: crewValue === "Mark Shuttleworth" ? "white" : "",
            }}
          ></button>
          <button
            onClick={onClickButton}
            value="Victor Glover"
            className="buttonCrew"
            style={{
              backgroundColor: crewValue === "Victor Glover" ? "white" : "",
            }}
          ></button>
          <button
            onClick={onClickButton}
            value="Anousheh Ansari"
            className="buttonCrew"
            style={{
              backgroundColor: crewValue === "Anousheh Ansari" ? "white" : "",
            }}
          ></button>
        </div>
      </div>
      <div className="rightPanel crew">
        {searched.map((d) => (
          <img
            key={d.name}
            alt={"imagecrew"}
            width={"500px"}
            height={"550px"}
            src={require("../utils/space-tourism-website-main/starter-code/assets/crew/image-" +
              nameImage +
              ".png")}
          />
        ))}
      </div>
    </div>
  );
}

export { Crew };
