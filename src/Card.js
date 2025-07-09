import React, { Component } from "react";
class Card extends Component {
  render() {
    return (
      <div className="card-box w-20 br3 b--near-white shadow-3 grow">
        <img alt="Happy robot" src="https://robohash.org/happy"></img>
        <h1>Hello it's me</h1>
      </div>
    );
  }
}

export default Card;
