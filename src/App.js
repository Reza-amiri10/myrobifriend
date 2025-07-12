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
    return (
      <div className="App pa0 ma0">
        <header className="  ma0 pa3 fixed top-0 left-0 right-0 z-999">
          <div>
            <h1 className="title pa0 ma0 dib">MY ROBO FRIENDS</h1>
            <Search setChange={this.setSearChange} />
          </div>
        </header>
        <main className="mt7 pa3">
          <div className="lh-copy">
            <CardMaker roboList={filterRobots} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
