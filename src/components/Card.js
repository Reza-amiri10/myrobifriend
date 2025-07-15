import React from "react";

const Card = ({ img, name, username, email }) => {
  return (
    <div className="card-box br3 dib shadow-3 grow pa3  ma2 bw2 tc mt4">
      <img className=" br3 ba bg-light-green" alt="Happy robot" src={img}></img>
      <div className="tl ml3">
        <h3>{name}</h3>
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
