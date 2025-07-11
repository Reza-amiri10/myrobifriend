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
        username={`User aneme: ${roboList[i].username}`}
        email={`Email: ${roboList[i].email}`}
        img={`https://robohash.org/${roboList[i].id}?size=200x200`}
      />
    );
  });
  return <div className="CardMaker">{cardcomponents}</div>;
}

export default CardMaker;
