import React from "react";
import data from "../data.json";

function Technology() {
  const [techValue, setTechValue] = React.useState("Launch vehicle");

  const onClickButton = (event) => {
    setTechValue(event.target.value);
  };

  let searched = [];

  searched = data.technology.filter((d) => {
    return d.name.includes(techValue);
  });

  let nameImage = searched.map(
    (d) => d.name.toLowerCase().replace(" ", "-") + "-portrait"
  );

  // console.log(nameImage);
  return (
    <div className="main">
      <div className="leftPanel">
        <div className="titleLeftPanel">
          <span className="numberLeftPanel">03 </span>
          <span className="textLeftPanel"> SPACE LAUNCH 101</span>
        </div>
        <div className="infoTechnology">
          <div className="buttonsGroupTech">
            <button
              // style={{ color: techValue === "Launch vehicle" ? "red" : "blue" }}
              onClick={onClickButton}
              value="Launch vehicle"
              className="buttonTech"
              style={{
                backgroundColor: techValue === "Launch vehicle" ? "white" : "",
                color: techValue === "Launch vehicle" ? "black" : "",
              }}
            >
              1
            </button>
            <button
              // style={{ color: techValue === "Spaceport" ? "red" : "blue" }}
              onClick={onClickButton}
              value="Spaceport"
              className="buttonTech"
              style={{
                backgroundColor: techValue === "Spaceport" ? "white" : "",
                color: techValue === "Spaceport" ? "black" : "",
              }}
            >
              2
            </button>
            <button
              // style={{ color: techValue === "Space capsule" ? "red" : "blue" }}
              onClick={onClickButton}
              value="Space capsule"
              className="buttonTech"
              style={{
                backgroundColor: techValue === "Space capsule" ? "white" : "",
                color: techValue === "Space capsule" ? "black" : "",
              }}
            >
              3
            </button>
          </div>
          <div className="textTech">
            <span className="terminologyTextTech">THE TERMINOLOGY...</span>
            <h3>{searched.map((d) => d.name.toUpperCase())}</h3>
            <p>{searched.map((d) => d.description)}</p>
          </div>
        </div>
      </div>
      <div className="rightPanel">
        {searched.map((d) => (
          <img
            key={d.name}
            alt={"Imagen"}
            src={require("../utils/space-tourism-website-main/starter-code/assets/technology/image-" +
              nameImage +
              ".jpg")}
          />
        ))}
      </div>
    </div>
  );
}

export { Technology };
