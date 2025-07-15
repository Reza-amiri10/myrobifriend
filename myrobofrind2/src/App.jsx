import React, { Component } from "react";
import CardMaker from ".//components/CardMaker";

import "tachyons";
import "./App.css";

import roboList from ".//assets/RoboList";
import Search from ".//components/Search";
import Scroll from ".//components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: roboList,
      searchvalue: "",
    };
  }

  setSearChange = (event) => {
    this.setState({ searchvalue: event.target.value });
  };

  render() {
    const { robots, searchvalue } = this.state;
    const searchField = searchvalue.toLowerCase();

    const filterRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField)
    );
    const cardCounts = filterRobots.length;
    return (
      <div className="App">
        <header className="tc pv0">
          <div>
            <h1 className="title beamiarFont mb1 dib">MY ROBO FRIEND</h1>
            <div className="flex items-center justify-center w-100">
              <Search ref={this.inputRef} setChange={this.setSearChange} />
              <h1 className="count f3">
                {cardCounts > 0 && searchField ? `${cardCounts} Matches` : ""}
              </h1>
            </div>
          </div>
        </header>

        <Scroll>
          {cardCounts > 0 ? (
            <CardMaker roboList={filterRobots} />
          ) : searchField ? (
            <h1 className="beamiarFont lowding">NO MATCHES</h1>
          ) : (
            <h1 className="beamiarFont lowding">LOWDING...</h1>
          )}
        </Scroll>
      </div>
    );
  }
}

export default App;
