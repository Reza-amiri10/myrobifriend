import React, { Component } from "react";
import CardMaker from "./CardMaker";
import "tachyons";
import "./App.css";
import roboList from "./RoboList";
import Search from "./Search";

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
    const searchCounts = filterRobots.length;
    const allCardsLowd = filterRobots.length;
    return (
      <div className="App">
        <header className=" ma0 pa2 fixed top-0 left-0 right-0 z-999">
          <div>
            <h1 className="title mb1 dib f3">MY ROBO</h1>
            <div className="flex items-center justify-center w-100">
              <Search ref={this.inputRef} setChange={this.setSearChange} />
              <h1 className="count f3">
                {searchCounts > 0 ? `${searchCounts} Matches` : ""}
              </h1>
            </div>
          </div>
        </header>
        {allCardsLowd > 0 ? (
          <main className="main pa3">
            <div className="lh-copy">
              <hr className="w-100 h-3 black"></hr>
              <CardMaker roboList={filterRobots} />
            </div>
          </main>
        ) : (
          <main className="main pa3">
            <h1 className="lowding">NO MATCHES</h1>
          </main>
        )}
      </div>
    );
  }
}

export default App;
