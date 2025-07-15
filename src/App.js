import React, { Component } from "react";
import CardMaker from "./CardMaker";
import "tachyons";
import "./App.css";
import roboList from "./RoboList";
import Search from "./Search";
import Scroll from "./Scroll";

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
    const filterRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchvalue.toLowerCase());
    });
    const Counts = filterRobots.length;
    return (
      <div className="App">
        <div>
          <h1 className="title beamiarFont mb1 dib">MY ROBO FRIEND</h1>
          <div className="flex items-center justify-center w-100">
            <Search ref={this.inputRef} setChange={this.setSearChange} />
            <h1 className="count f3">
              {Counts > 0 && this.state.searchvalue.toLocaleLowerCase()
                ? `${Counts} Matches`
                : ""}
            </h1>
          </div>
        </div>

        <Scroll>
          {Counts > 0 ? (
            <CardMaker roboList={filterRobots} />
          ) : this.state.searchvalue.toLocaleLowerCase() ? (
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
