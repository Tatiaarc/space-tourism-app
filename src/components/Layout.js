import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import logoImage from "../utils/space-tourism-website-main/starter-code/assets/shared/logo.svg";
import backHome from "../utils/space-tourism-website-main/starter-code/assets/home/background-home-desktop.jpg";
import backDestination from "../utils/space-tourism-website-main/starter-code/assets/destination/background-destination-desktop.jpg";
import backCrew from "../utils/space-tourism-website-main/starter-code/assets/crew/background-crew-desktop.jpg";
import backTechnology from "../utils/space-tourism-website-main/starter-code/assets/technology/background-technology-desktop.jpg";

function Layout() {
  const [layoutValue, setLayoutValue] = React.useState("/");

  const onClickLayout = (event) => {
    // console.log(event.target.href.slice(21, event.target.href.lenght));
    setLayoutValue(event.target.href.slice(44, event.target.href.lenght));
  };

  document.body.style.backgroundImage = `url('${backDestination}')`;

  if (layoutValue === "/") {
    document.body.style.backgroundImage = `url('${backHome}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
  } else if (layoutValue === "/destination") {
    document.body.style.backgroundImage = `url('${backDestination}')`;
  } else if (layoutValue === "/crew") {
    document.body.style.backgroundImage = `url('${backCrew}')`;
  } else {
    document.body.style.backgroundImage = `url('${backTechnology}')`;
  }

  return (
    <React.Fragment>
      <nav>
        <div className="logoMain">
          <div className="logoContainer">
            <img src={logoImage} alt={"Logo"} />
          </div>
          <div className="lineBox">
            <div className="line"></div>
          </div>
        </div>
        <div className="navigation">
          <ul>
            <li
              style={{
                borderBottom: layoutValue === "/" ? "3px solid white" : "",
              }}
            >
              <Link
                to="/space-tourism-app/"
                value="home"
                onClick={onClickLayout}
              >
                00 HOME
              </Link>
            </li>
            <li
              style={{
                borderBottom:
                  layoutValue === "/destination" ? "3px solid white" : "",
              }}
            >
              <Link
                to="destination"
                value="destination"
                onClick={onClickLayout}
              >
                01 DESTINATION
              </Link>
            </li>
            <li
              style={{
                borderBottom: layoutValue === "/crew" ? "3px solid white" : "",
              }}
            >
              <Link to="crew" value="crew" onClick={onClickLayout}>
                02 CREW
              </Link>
            </li>
            <li
              style={{
                borderBottom:
                  layoutValue === "space-tourism-app/technology"
                    ? "3px solid white"
                    : "",
              }}
            >
              <Link to="technology" value="technology" onClick={onClickLayout}>
                03 TECHNOLOGY
              </Link>
            </li>
          </ul>
          <div className="blurNav"></div>
        </div>
      </nav>
      <Outlet />
    </React.Fragment>
  );
}

export { Layout };
