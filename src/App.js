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
      <div className="App">
        <header className=" ma0 pa2 fixed top-0 left-0 right-0 z-999">
          <div>
            <h1 className="title mb1 dib">MY ROBO FRIENDS</h1>
            <Search setChange={this.setSearChange} />
          </div>
        </header>
        <main className="main pa3">
          <div className="lh-copy">
            <hr className="w-100 h-3 black"></hr>
            <CardMaker roboList={filterRobots} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
