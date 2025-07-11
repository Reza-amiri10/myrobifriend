import React, { Component } from "react";
import CardMaker from "./CardMaker";
import "tachyons";
import "./App.css";
import Header from "./Header";

class App extends Component {
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
