import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card-box br3 dib shadow-3 grow pa3  ma2 bw2 tc mt4">
        <img
          className=" br3 ba bg-light-green"
          alt="Happy robot"
          src={this.props.img}
        ></img>
        <div className="tl ml3">
          <h3>{this.props.name}</h3>
          <p>{this.props.username}</p>
          <p>{this.props.email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
