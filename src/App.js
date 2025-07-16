import React, { useState, useEffect } from "react";
import CardMaker from "./components/CardMaker";
import Search from "./components/Search";
import Scroll from "./components/Scroll";

import "tachyons";
import "./App.css";

import roboList from "./assets/RoboList";

export default function App() {
  const [robots, setRobots] = useState([]);
  const [serchField, setSearchField] = useState("");

  useEffect(() => {
    setRobots(roboList);
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filtereRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(serchField.toLowerCase())
  );
  console.log(filtereRobots);
  return (
    <div className="App">
      <header className="tc pv0">
        <div>
          <h1 className="title beamiarFont mb1 dib">MY ROBO FRIEND</h1>
          <div className="flex items-center justify-center w-100">
            <Search setChange={onSearchChange} />
            <h1 className="count f3">
              {robots.length > 0 && serchField
                ? `${filtereRobots.length} Matches`
                : ""}
            </h1>
          </div>
        </div>
      </header>

      <Scroll>
        {robots.length > 0 ? (
          <CardMaker roboList={filtereRobots} />
        ) : robots ? (
          <h1 className="beamiarFont lowding">NO MATCHES</h1>
        ) : (
          <h1 className="beamiarFont lowding">LOWDING...</h1>
        )}
      </Scroll>
    </div>
  );
}
