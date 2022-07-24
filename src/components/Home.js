import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import backHome from "../utils/space-tourism-website-main/starter-code/assets/home/background-home-desktop.jpg";
import backDestination from "../utils/space-tourism-website-main/starter-code/assets/destination/background-destination-desktop.jpg";

function Home() {
  const [layoutValueHome, setLayoutValue] = React.useState("/");

  const onClickLayoutHome = (event) => {
    setLayoutValue(event.target.href.slice(39, event.target.href.lenght));
  };

  console.log("Val" + layoutValueHome);
  if (layoutValueHome === "/destination") {
    document.body.style.backgroundImage = `url('${backDestination}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
  } else {
    document.body.style.backgroundImage = `url('${backHome}')`;
  }

  return (
    <div className="main">
      <div className="leftPanel home">
        <h5>So, you want to travel to</h5>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="rightPanel home">
        <div className="big-explore-circle">
          <button className="explore-circle">
            <Link to="destination" className="link" onClick={onClickLayoutHome}>
              EXPLORE
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export { Home };
