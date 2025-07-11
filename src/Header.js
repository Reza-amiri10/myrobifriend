import React, { Component } from "react";
import Search from "./Search";
import roboList from "./RoboList";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      robots: roboList,
      searchvalue: "",
    };
  }

  render() {
    return (
      <header className="  ma0 pa3 fixed top-0 left-0 right-0 z-999">
        <div>
          <h1 className="title pa0 ma0 dib">MY ROBO FRIENDS</h1>
        </div>
        <Search />
      </header>
    );
  }
}

export default Header;
