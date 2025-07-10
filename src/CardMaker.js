import "tachyons";
import "./App.css";
import roboList from "./RoboList";
import Card from "./Card";

function CardMaker() {
  const cardcomponents = roboList.map((robo, i) => {
    return (
      <Card
        key={roboList[i].id}
        name={roboList[i].name}
        email={roboList[i].email}
        img={`https://robohash.org/s${roboList[i].id}`}
      />
    );
  });
  return <div className="CardMaker">{cardcomponents}</div>;
}

export default CardMaker;
