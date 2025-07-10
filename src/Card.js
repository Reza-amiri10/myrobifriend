import React, { Component } from "react";
class Card extends Component {
  render() {
    return (
      <div className="card-box w-20 br3 b--near-white shadow-3 grow pa3 ma3">
        <img alt="Happy robot" src={this.props.img}></img>
        <h1>{this.props.name}</h1>
        <h2>{this.props.email}</h2>
      </div>
    );
  }
}

export default Card;
