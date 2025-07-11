import React, { Component } from "react";
import CardMaker from "./CardMaker";
import "tachyons";
import "./App.css";
import Header from "./Header";
import roboList from "./RoboList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      roboList: roboList,
      searchfield: "",
    };
  }
  render() {
    return (
      <div className="App pa0 ma0">
        <Header />
        <main className="mt7 pa3">
          <div className="lh-copy">
            <CardMaker />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
